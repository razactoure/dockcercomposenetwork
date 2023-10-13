const express = require("express")
const {Sequelize} = require("sequelize")

const {DataTypes} = require("sequelize");
const configDatabase = require("./env")

/** DATABASE CONNEXION **/

const poolConnection = new Sequelize("nodepai","nodepai" ,"nodepai" , {
    host: "db",
    dialect: "mysql",
    port: "3306",
})



const User = poolConnection.define('users' , {
    login: {
        type: DataTypes.STRING ,
        allowNull: false ,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
} , {
    tableName: "users"
})

User.sync({force: true}).then((data) => {
    console.log("**************************** TABLE user was created")
}).catch(console.log)

const server = express();
server.use(express.json());

const createUser = (req) => {
    return new Promise(async (resolve , reject) => {
        const userinstance = await toolsQuery.create({
            login: req.body.login,
            password: req.body.password
        })
        userinstance.save().then(resolve).catch(reject);
    })
}

const getAll = (req) => {
    return new Promise(async (resolve , reject) => {
        const userinstance = await toolsQuery.findAll();
        if(userinstance) resolve(userinstance)
        if(!userinstance) reject(userinstance)
    })
}

server.post("/",(req ,res) => {
    createUser(req).then((response) => {
        res.status(200).json({
            status: 1 ,
            message: 'user created '
        })
    }).catch(err => {
        res.status(200).json({
            status: 0 ,
            message: 'user  has not created '
        })
    })

});
server.get("/",(req ,res) => {
    getAll(req).then((response) => {
        res.status(200).json({
            status: 1 ,
            message: 'user created '
        })
    }).catch(err => {
        res.status(200).json({
            status: 0 ,
            message: 'user  has not created '
        })
    })

});

server.listen(8080,() => {
    console.log("Listene");
})