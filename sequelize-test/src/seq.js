const Sequelize = require('sequelize')

const conf = {
    host: 'localhost',
    dialect: 'mysql'
}

const seq = new Sequelize('koa2_weibo_db', 'root', 'cx269851', conf)

module.exports = seq

// 测试连接
seq.authenticate().then(() => {
    console.log('ok')
}).catch(() => {
    console.error('err')
})