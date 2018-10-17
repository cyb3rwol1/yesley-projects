# yesley-projects

# Requisitos
    1.Node JS /npm
    2.MongoDB
    3.Angular 6

1. Intalar ultima versão do nodejs/npm



# Projeto:
/   
    /controllers
    /models
    /routes
    database.js
    app.js


# Mongo

use NomeDB -> connecta e cria o DB
db -> Verifica o banco atual
show dbs

db.createUser({  "user": "yesley",  "pwd": "bighead1",  "roles": [ "readWrite" , "dbAdmin" ] } ); -> cria usuario no banco

db.createCollection('usuario'); -> Cria tabela
show collections; -> mostra todas tabelas

db.usuario.insert({"nome":"yesley"}); -> insert tabela
db.usuario.find(); -> Busca todos
