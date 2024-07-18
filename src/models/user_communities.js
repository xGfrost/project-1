const dbPool = require ('../config/database');

const getAll = () =>{
    const SQLQuery = 'SELECT * FROM communities';

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAll,
    
}