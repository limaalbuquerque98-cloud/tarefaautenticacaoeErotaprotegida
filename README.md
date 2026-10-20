# Tarefa 4 – Implementação de Autenticação Simples

Este projeto é uma API simples em Node.js com Express para demonstrar autenticação básica por usuário/senha e token.

## Funcionalidades

- Login com credenciais fixas
- Validação de token para rotas protegidas
- Listagem de tarefas autenticada
- Adição de nova tarefa com autenticação

## Credenciais de exemplo

- Usuário: `admin`
- Senha: `senha123`
- Token válido: `seu-token-simples`

## Rotas

### POST `/login`

Autentica o usuário e retorna um token.

Exemplo de corpo:

```json
{
  "user": "admin",
  "pass": "senha123"
}
```

Resposta esperada:

```json
{
  "message": "Login bem-sucedido",
  "token": "seu-token-simples"
}
```

### GET `/tasks`

Retorna a lista de tarefas, exigindo o token no cabeçalho `Authorization`.

Exemplo:

```http
Authorization: seu-token-simples
```

### POST `/task`

Adiciona uma nova tarefa ao array, também protegida por token.

Exemplo de corpo:

```json
{
  "task": "Estudar autenticação JWT"
}
```

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor:

```bash
node index.js
```

3. A API ficará disponível em:

```text
http://localhost:3000
```

## Observação

Este é um exemplo didático de autenticação simples e não deve ser usado como solução de produção sem melhorias de segurança, como armazenamento seguro de senhas e uso de JWT com assinatura e expiração.
