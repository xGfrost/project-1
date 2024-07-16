const dbPool = require('../config/database');

const getAllbadges = () => {
    const SQLQuery = 'SELECT * FROM badges';

    return dbPool.execute(SQLQuery);
}

const createNewbadges = (body, image) =>{
    const SQLQuery = `INSERT INTO badges (nama, description, icon) 
                        VALUES ('${body.nama}', '${body.description}', '${image}')`;

                        return dbPool.execute(SQLQuery);
}



const updatebadges = (body, idbadges, image)=>{
    const SQLQuery = `UPDATE badges
                        SET nama= '${body.nama}', description = '${body.description}', icon ='${image}'
                        WHERE id=${idbadges}`

                        return dbPool.execute(SQLQuery);
}

const deletebadges = (idbadges) => {
    const SQLQuery = `DELETE FROM badges WHERE id=${idbadges}`

    return dbPool.execute(SQLQuery);
}









module.exports = {
    createNewbadges,
    getAllbadges,
    updatebadges,
    deletebadges,
}