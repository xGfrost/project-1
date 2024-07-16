const dbPool = require('../config/database');

const getAll = () =>{
    const SQLQuery = 'SELECT * FROM achievements';

    return dbPool.execute(SQLQuery);
}

const createNew = (body, image) =>{
    const SQLQuery = `INSERT INTO achievements (nama, description, icon)
                        VALUES ('${body.nama}', '${body.description}', '${image}')`;

                        return dbPool.execute(SQLQuery);
}

const update = (body, idAchievements, image) =>{
    const SQLQuery = `UPDATE achievements
                        SET nama= '${body.nama}', description = '${body.description}', icon ='${image}'
                        WHERE id=${idAchievements}`

                        return dbPool.execute(SQLQuery);
}

const deleteAchievements =(idAchievements) => {
    const SQLQuery = `DELETE FROM achievements WHERE id=${idAchievements}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAll,
    createNew,
    update,
    deleteAchievements,
    
}