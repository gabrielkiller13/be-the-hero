const knex = require('knex')
const configuration = require('../../knexfile')//Importa as configurações de banco de dados do aquivo knexfile
const connection = knex(configuration.development) //Utiliza a conexão de desenvolvimento existente dentro do knexfile

module.exports = connection //Expota como um módulo a conexão feita com o banco de dados 
