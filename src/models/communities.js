const dbPool = require('../config/database');

const getAll = () =>{
    const SQLQuery = 'SELECT * FROM communities';

    return dbPool.execute(SQLQuery);
}

const getByid = (id) => {
    const SQLQuery = 'SELECT * FROM communities WHERE id = ?';
    return dbPool.execute(SQLQuery, [id])
    .then(([results, fields])=> results);
}

const getByuserid = (user_id) => {
    const SQLQuery = 'SELECT * FROM communities WHERE user_id = ?';
    return dbPool.execute(SQLQuery, [user_id])
    .then(([results, fields])=> results);
}

const createNew = (body, image) => {
    const SQLQuery = `INSERT INTO communities (user_id, name, description, image)
                        VALUES ('${body.user_id}', '${body.name}', '${body.description}', '${image}')`;

                        return dbPool.execute(SQLQuery);
}

const update = (body, id, image) =>{
    const SQLQuery = `UPDATE communities
                        SET name='${body.name}', description='${body.description}', image='${image}'
                        WHERE id=${id}`;

                        return dbPool.execute(SQLQuery);
}

const deleteCommunities = (id) => {
    const SQLQuery = `DELETE FROM communities WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

module.exports ={
    getAll,
    getByid,
    getByuserid,
    createNew,
    update,
    deleteCommunities,
}