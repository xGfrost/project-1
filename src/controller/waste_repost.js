const reportsModel = require('../models/waste_reports');

const getAll = async (req, res) =>{
    try {
        const [data] = await reportsModel.getAll();
        res.json({
            messageL: 'GET all report waste success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const createNew = async (req, res) => {
    const {body, file} = req;
    const imageName = file.filename;

    if(!body.user_id || !body.description || !file || !body.location || !body.poin || !body.coin){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: body,
        })
    }

    try {
        await reportsModel.createNew(body, imageName);
        res.status(201).json({
            message:"CREATE new waste reports success",
            data:{
                user:{
                    nama: body,
                    poin: body.poin
                },
                image: imageName
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const update = async (req, res) => {
    const {idReports} = req.params;
    const {body} = req;

    try {
        await reportsModel.update(body, idReports);
        res.json({
            message: 'UPDATE waste reports success',
            data: {
                id: idReports,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

module.exports = {
    getAll,
    createNew,
    update,
}