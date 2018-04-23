const Sequelize = require('sequelize')
const TEST_URL = 'dev.werapun.com';
const sequelize = new Sequelize('travel', 'travel', 'knightza123', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    },
    logging: false,
    operatorsAliases: false
});

const type = {};
type.Sequelize = Sequelize;
type.sequelize = sequelize;

module.exports = type;
