const Sequelize = require('sequelize')
const seq = require('./seq')

// 创建User模型
const User = seq.define('user', {
    // id会自动创建, 并设为主键、自增
    userName: {
        type: Sequelize.STRING, // varchar(255)
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nickName: {
        type: Sequelize.STRING
    }
})

module.exports = {
    User
}
