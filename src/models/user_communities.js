const dbPool = require ('../config/database');

const getAll = () =>{
    const SQLQuery = 'SELECT * FROM user_communities';

    return dbPool.execute(SQLQuery);
}

const getByid = (id) =>{
    const SQLQuery = 'SELECT * FROM user_communities WHERE id = ?';
    return dbPool.execute(SQLQuery, [id])
    .then(([results, fields]) => results);
}

const getByuserid = (user_id) =>{
    const SQLQuery = 'SELECT * FROM user_communities WHERE user_id = ?';
    return dbPool.execute(SQLQuery, [user_id])
    .then(([results, fields]) => results);
}

const getBycommunitiesid = (community_id) =>{
    const SQLQuery = 'SELECT * FROM user_communities WHERE community_id = ?';
    return dbPool.execute(SQLQuery, [community_id])
    .then(([results, fields]) => results);
}

const createNew = (body) => {
    const SQLQuery = `INSERT INTO user_communities (user_id, community_id)
                        VALUES ('${body.user_id}','${body.community_id}')`;

                        return dbPool.execute(SQLQuery);
}

const deleteusercommuniites = (id) => {
    const SQLQuery =  `DELETE FROM user_communities WHERE id=${id} `;

    return dbPool.execute(SQLQuery);
}

const update = (body, id)=> {
    const SQLQuery = `UPDATE user_communities
                        SET user_id = '${body.user_id}', community_id = '${body.community_id}'
                        WHERE id=${id}`;

                        return dbPool.execute(SQLQuery);
}

module.exports = {
    getAll,
    getByid,
    getByuserid,
    getBycommunitiesid,
    createNew,
    deleteusercommuniites,
    update,

    
}