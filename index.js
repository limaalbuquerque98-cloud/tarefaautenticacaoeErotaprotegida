const express = require('express');
const app = express();

app.use(express.json());

// Credenciais pré-definidas para autenticação simples
const USERNAME_VALIDO = 'admin';
const PASSWORD_VALIDO = 'senha123';
const TOKEN_VALIDO = 'seu-token-simples';

// Lista de tarefas simulada
const tasksList = [
    'Estudar Node.js e Express',
    'Configurar rotas protegidas',
    'Testar rotas com o Postman'
];

// Rota de Login (POST /login)
app.post('/login', (req, res) => {
    const { user, pass } = req.body;

    // Valida usuário e senha
    if (user === USERNAME_VALIDO && pass === PASSWORD_VALIDO) {
        return res.json({ 
            message: 'Login bem-sucedido', 
            token: TOKEN_VALIDO 
        });
    } else {
        return res.status(401).json({ 
            message: 'Usuário ou senha incorretos' 
        });
    }
});

// Rota protegida de listagem de tarefas (GET /tasks)
app.get('/tasks', (req, res) => {
    const token = req.headers['authorization'];

    // Verifica se o token enviado no cabeçalho é válido
    if (token === TOKEN_VALIDO) {
        return res.json({ tasks: tasksList });
    } else {
        return res.status(403).json({ 
            message: 'Acesso proibido. Token inválido.' 
        });
    }
});

// Opcional: Rota para adicionar tarefas (protegida opcionalmente ou aberta, conforme o enunciado)
app.post('/task', (req, res) => {
    const token = req.headers['authorization'];

    if (token === TOKEN_VALIDO) {
        const { task } = req.body;
        if (!task) {
            return res.status(400).json({ message: 'O campo task é obrigatório.' });
        }
        tasksList.push(task);
        return res.status(201).json({ message: 'Tarefa adicionada com sucesso!', tasks: tasksList });
    } else {
        return res.status(403).json({ message: 'Acesso proibido. Token inválido.' });
    }
});

// Inicialização do Servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});