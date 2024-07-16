const wasteexchangesModel = require('../models/wasteexchanges');

const getAllwasteexchanges = async (req, res) => {
    try {
        const [data] = await wasteexchangesModel.getAllwasteexchanges();
        res.json({
            message: 'GET all wasteexchanges success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
        
    }
}

const getByid = async (req, res) => {
    const {user_id} = req.params;
    try {
        const data = await wasteexchangesModel.getByid(user_id);
        res.json({
            message: 'GET id wasteexchanges success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewwasteexchanges = async (req, res) => {
    const {body, file} = req;
    const imageName = file.filename;

    if( !body.user_id || !body.weight  || !file || !body.total_poin || !body.total_coin){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: body,
        })
    }

    try {
        await wasteexchangesModel.createNewwasteexchanges(body, imageName);


        res.status(201).json({
            message: 'CREATE new waste exchanges success',
            data:{
                wasteexchanges: body,
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

        // cek apakah create berhasil dijalankan
        // jalankan fungsi untuk update poin & coin



module.exports = {
    getAllwasteexchanges,
    createNewwasteexchanges,
    getByid,
}