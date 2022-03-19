# projeto-JobFinder-comNodeJs-Express-Sequelize
 projeto Job Finder

dependencias

npm init -y

npm install bootstrap

npm install sass

npm install express//EXPRESS É NOSSO FRAMEWORK

npm install sqlite3//CONEXAO COM O BANCO SQLITE //bem leve

npm install express-handlebars//AJUDA A BASICAMENTE CRIAR UM TEMPLATE EM HTML BASEADO NO BACK-END

npm install body-parser// AJUDA A PEGAR REPOSIÇÃO "CORPO DELA"

npm install sequelize//CONECTA COM O BANCO

npm install -D nodemon // parecido com o liveserver mas para node.js

//ou seja não precisa de dar restart no server sempre



//dentro do arquivo package.json na chave
 "scripts": {
//podemos usar o comando 
"dev":"nodemon script/app.jss"
}

//sempre que no console digitarmos npm run dev ele vai iniciar o script usando nodemon, ou seja, vai atualizar em tempo real todas as alteraçoes
