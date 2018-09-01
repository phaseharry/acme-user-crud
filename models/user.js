const Sequelize = require('sequelize');
const connection = new Sequelize(process.env.DATABASE_URL);

const User = connection.define('user', {
    name : {
        type: Sequelize.STRING,
        unique: true
    }
})

const syncAndSeed = () => {
    return connection.sync().then(() => {
        return Promise.all([
            User.create({name : 'Harry'}),
            User.create({name : 'Moe'}),
            User.create({name : 'Larry'}),
            User.create({name : 'Curly'})
        ]).then( users => users)
    })
}

module.exports = {
    User, 
    connection,
    syncAndSeed
}