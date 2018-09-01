const Sequelize = require('sequelize');
const connection = new Sequelize(process.env.DATABASE_URL);

const User = connection.define('user', {
    name : {
        type: Sequelize.STRING,
        unique: true
    }
})

const syncAndSeed = () => {
    return connection.sync().then(asdf => {
        console.log(asdf)
    })
}

module.exports = {
    User, 
    connection
}