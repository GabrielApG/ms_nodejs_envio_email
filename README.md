# Projeto de Envio de E-mails

Este projeto é uma aplicação Node.js que permite o envio de e-mails utilizando o **Nodemailer** e o **MailHog** para simular o envio de e-mails em um ambiente de desenvolvimento.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (opcional, apenas se quiser rodar localmente sem Docker)

## Como Executar o Projeto

# 1. Usando Docker Compose

O projeto pode ser executado facilmente com o Docker Compose. Siga os passos abaixo:

**Clone o repositório**:

```bash
git clone https://github.com/seu-usuario/ms_envio_emails.git
cd ms_envio_emails
```

# 2. **Suba os containers:**

### Execute o seguinte comando para subir a aplicação e o MailHog:

```bash
docker-compose up --build
```

### **Isso irá:**

Construir a imagem do Node.js.

Subir o container da aplicação.

Subir o container do MailHog.

# 3. **Acesse a aplicação:**

API: A aplicação estará rodando em http://localhost:3000.

Swagger UI: Acesse a documentação da API em http://localhost:3000/docs.

MailHog: Acesse a interface do MailHog em http://localhost:8025.

### A aplicação estará disponível em http://localhost:3000.

Endpoints da API
Enviar E-mail
Método: POST

URL: /send-mail

Body:

```json
{
  "to": "destinatario@example.com",
  "subject": "Assunto do E-mail",
  "body": "Corpo do E-mail"
}
```

Resposta de Sucesso:

```json
{
  "message": "Email sent successfully"
}
```

Resposta de Erro:

```json
{
  "error": "Failed to send email",
  "details": "Mensagem de erro"
}
```

Health Check
Método: GET

URL: /health

Resposta:

```json
{
  "status": "OK"
}
```

Estrutura do Projeto

```text
ms_envio_emails/
├── __tests__/                  # Testes unitários
├── src/
│   ├── app/
│   │   ├── controller/         # Controladores da API
│   │   ├── services/           # Serviços de negócio
│   │   └── helpers/            # Utilitários e helpers
│   ├── routes/                 # Rotas da API
│   └── log/                    # Configuração de logs
├── docker-compose.yml          # Configuração do Docker Compose
├── Dockerfile                  # Dockerfile para a aplicação
├── package.json                # Dependências do projeto
├── README.md                   # Documentação do projeto
└── .env                        # Variáveis de ambiente
```

Testes

Para executar os testes unitários, use o seguinte comando:

```bash
npm test
```

### Links Úteis

Swagger UI: http://localhost:3000/docs

MailHog: http://localhost:8025

API Base URL: http://localhost:3000

### Como Fazer o Download

1. **Copie o conteúdo acima** e cole em um arquivo chamado `README.md`.
2. **Ou faça o download**:
   - Se você estiver no Linux ou macOS, pode usar o comando abaixo para criar o arquivo diretamente:
     ```bash
     echo -e '# Projeto de Envio de E-mails\n\nEste projeto é uma aplicação Node.js que permite o envio de e-mails utilizando o **Nodemailer** e o **MailHog** para simular o envio de e-mails em um ambiente de desenvolvimento.\n\n...' > README.md
     ```
   - Se preferir, salve o conteúdo em um arquivo manualmente.

Agora você tem um `README.md` completo e pronto para ser usado no seu projeto! 🚀
