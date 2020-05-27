# Criação do um novo projeto com node.js:
1-Criar uma pasta com nome do Prjeto e depois abrir o terminal.
1.1- $ npm init => seguindo os passo a posso das perguntas.
2- Instalar um servidor local
2.1 $ npm install express => Dentro da pasta index.js cria a configuração do express:
exemplo:
const express = require('express')
const app = express()
app.listen(3000, () => console.log('servidor rodando na porta 3000'))
2.2 $ node index.js
3- Instalar o pacote de nodemon para start automatico o servidor.
3.1 $ npm install --save-dev nodemon
4- Configurar o nodemon dentro do "package.json" em "scripts".
4.1 Exemplo:
 "scripts": {
    "start": "nodemon index.js" 
}
5-Depois para iniciar o serviço do servidor rodar o comando "npm start"
5.1 $ npm start

6- Instalar o consign para controlar as pasta que criamos e forem executada.
6.1 Exemplo:
consign()
  .include('controllers')
  .into(app)

