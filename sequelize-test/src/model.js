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
        type: Sequelize.STRING,
        comment: '昵称'
    }
    // 自动创建: createdAt 和 updatedAt
})

// 创建 Blog
const Blog = seq.define('blog', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

// 外键关联
Blog.belongsTo(User, {
    // 创建外键 Blog.userId -> User.id
    foreignKey: 'userId',
})
User.hasMany(Blog, {
    foreignKey: 'userId'
})

module.exports = {
    User,
    Blog
}
