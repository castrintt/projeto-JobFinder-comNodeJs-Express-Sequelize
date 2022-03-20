const Sequelize = require('sequelize')

const db = require('../db/connection') 

//criando banco

const Job = db.define('job', {
    title : {
        type : Sequelize.STRING,
    },
    description : {
        type : Sequelize.STRING,
    },
    salary : {
        type : Sequelize.STRING,
    },
    company : {
        type : Sequelize.STRING,
    },
    email : {
        type : Sequelize.STRING,
    },
    new_job: {
        type : Sequelize.INTEGER,
    }
    
})

//exportando

module.exports = Job