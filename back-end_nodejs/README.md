COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indecadas pelo aquivo package.json
### npm install

Rodar o projeto usando o nodemon
### nodemon app.js

SEQUENCIA PARA CRIAR O PROJETO
cria o arquivo package.json
### npm init

Gerencia as requisições, rotas e URLs, entre outras funcionalidades
Doc: https://www.npmjs.com/package/express 
### npm install express

Rodar o projeto: http://localhost:8080
### node app.js

Instalar a dependência de forma global, "-g" significa globalmente. Executar o comando através do prompt de comando, executar somente se nunca instalou a dependência na maaquina, apois instalar, reiniciar a maquina.
### npm install -g nodemon

Instalar a dependência como desenvolvedor para reiniciar o servidor sempre que houver alteração no código fonte.
### npm install --save-dev nodemon

Instalar o banco de dados MySQL

Verificar o banco de dados MySQL no prompt de comando
### mysql -h localhost -u root -p

Instalar o Workbench para gerenciar o banco de dados de forma gráfica

Comando utilizado para a criação da base de dados
### create database oito_base_dadosusuarios character set utf8mb4 collate utf8mb4_unicode_ci;

Sequelize é uma biblioteca JavaScript que facilita o gerenciamento de um banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Permite acesso a API
### npm install --save cors 
