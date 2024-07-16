const dbPool = require('../config/database');

const getAll = () => {
    const SQLQuery = 'SELECT * FROM waste_reports';

    return dbPool.execute(SQLQuery);
}

const createNew = (body, imageName) => {
    const SQLQuery = `INSERT INTO waste_reports (user_id, description, image, location, poin, coin)
                        VALUES ('${body.user_id}','${body.description}','${imageName}','${body.location}','${body.poin}','${body.coin}')`

                        return dbPool.execute(SQLQuery);
}

const update = async (body, idReports) => {
    // Query untuk update status di tabel waste_reports
    let SQLQuery = `UPDATE waste_reports
                    SET status = ?
                    WHERE id = ?`;
    
    await dbPool.execute(SQLQuery, [body.status, idReports]);

    // select data waste reports yang bersangkutan
    const wasteReportsQuery = `SELECT * FROM waste_reports WHERE id = ?`;
    const [rows] = await dbPool.execute(wasteReportsQuery, [idReports]);

    if (rows.length > 0) {
        const userId = rows[0].user_id;
        const poin = rows[0].poin;
        const coin = rows[0].coin;

        if (body.status === "approved") {
            const userQuery = `UPDATE users
                               SET coin = coin + ?, poin = poin + ?
                               WHERE id = ?`;
            const userValues = [coin, poin, userId];

            await dbPool.execute(userQuery, userValues);
        }
    } else {
        throw new Error(`No user_id found for waste_report id ${idReports}`);
    }
}

module.exports = {
    getAll,
    createNew,
    update,
}