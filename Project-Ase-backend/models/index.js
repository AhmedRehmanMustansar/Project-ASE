const dbConfig = require('../config/dbConfig.js');

const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        pool: {
          max: dbConfig.pool.max,
          min: dbConfig.pool.min,
          acquire: dbConfig.pool.acquire,
          idle: dbConfig.pool.idle,
        }
    }
)

sequelize.authenticate().then(
 ()=>{
    console.log('connected..');
 }
).catch(
    (err)=>{
      console.log('Error' + err);
    }
)


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require('./studentModel')(sequelize,DataTypes);
db.courses = require('./courseModel')(sequelize,DataTypes);

db.sequelize.sync({force: true})
.then(
    () =>{
        console.log('re-sync is done');
    }
)


module.exports = db;