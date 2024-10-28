# Aplicação de Clima em Tempo Real

Este projeto é uma aplicação simples que utiliza o Socket.IO para atualizar informações climáticas em tempo real. Os dados são obtidos de uma API de clima e exibidos no navegador.
Os usuários podem selecionar diferentes capitais do Brasil para ver a temperatura atual, a temperatura mínima, a temperatura máxima, uma breve descrição do clima e a data atual.

## Tecnologias Utilizadas

- Node.js
- Express
- Socket.IO
- Axios
- OpenWeatherMap API

## Pré-requisitos

Antes de começar, verifique se você tem o Node.js e o npm instalados em sua máquina. Você pode baixá-los [aqui](https://nodejs.org/).

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/xGhastly/Aplica--o-de-Clima-em-Tempo-Real.git

2. Navegue até o diretório do projeto:
   ```bash
   cd seu-repositorio

3. Instale as dependências:
   ```bash
   npm install

4. Crie um arquivo .env na raiz do projeto e adicione sua chave da API:
   ```bash
   API_KEY=sua_chave_da_api_aqui
   
5. Adicione o arquivo .env ao seu .gitignore para evitar que seja rastreado pelo Git:
   ```bash
   .env

## Como usar

1. Inicie o servidor:
    ```bash
    npm start

2. Abra seu navegador e acesse http://localhost:3000.

3. Selecione uma das capitais do Brasil no menu suspenso e clique em "Atualizar Clima" para ver as informações climáticas.

## Estrutura do projeto

  ```bash
/seu-repositorio
│
├── server.js        # Servidor Node.js com Express e Socket.IO
├── .env             # Variáveis de ambiente (não deve ser rastreado)
├── .gitignore       # Ignora arquivos e diretórios indesejados
└── index.html       # Frontend da aplicação
