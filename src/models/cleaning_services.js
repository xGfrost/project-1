const dbPool = require('../config/database');

const createnewServices = (body) => {
    const SQLQuery = `INSERT INTO cleaning_services (user_id, description, address, customer_contact, datetime)
                        VALUES ('${body.user_id}', '${body.description}', '${body.address}', '${body.customer_contact}', '${body.datetime}')`;

                        return dbPool.execute(SQLQuery);
}

const getAll = () => {
    const SQLQuery = 'SELECT * FROM cleaning_services';

    return dbPool.execute(SQLQuery);
}

const getByid = (user_id) => {
    const SQLQuery = 'SELECT * FROM cleaning_services WHERE user_id = ?';
    return dbPool.execute(SQLQuery, [user_id])
    .then(([results, fields]) => results);
}

const updatestatus = (body, idCleaningservices) =>{
    const SQLQuery = `UPDATE cleaning_services SET status='${body.status}'
                        WHERE id=${idCleaningservices}`;

    return dbPool.execute(SQLQuery);
}



module.exports = {
    getAll,
    getByid,
    createnewServices,
    updatestatus,
}