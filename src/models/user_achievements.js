const dbPool = require('../config/database');

const getAll = () => {
    const SQLQuery = 'SELECT * FROM user_achievements';

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAll,
}