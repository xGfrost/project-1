const dbPool = require('../config/database');

const getAllwasteexchanges = () => {
    const SQLQuery = 'SELECT * FROM waste_exchanges';

    return dbPool.execute(SQLQuery);
}

const getByid = (user_id) => {
    const SQLQuery = 'SELECT * FROM waste_exchanges WHERE user_id = ?';
    return dbPool.execute(SQLQuery, [user_id])
        .then(([results, fields]) => results);
}

const createNewwasteexchanges = async (body, imageName) => {
    const SQLInsert = `INSERT INTO waste_exchanges (user_id, weight, image, total_poin, total_coin) 
                        VALUES (?, ?, ?, ?, ?)`;
    const values = [body.user_id, body.weight, imageName, body.total_poin, body.total_coin];

    const SQLUpdateUser = `UPDATE users 
                           SET poin = poin + ?, coin = coin + ? 
                           WHERE id = ?`;
    const userValues = [body.total_poin, body.total_coin, body.user_id];

    try {
        await dbPool.execute(SQLInsert, values);
        await dbPool.execute(SQLUpdateUser, userValues);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllwasteexchanges,
    createNewwasteexchanges,
    getByid,

}