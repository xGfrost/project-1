const achievementsModel = require('../models/achievements');

const getAll = async (req, res) =>{
    try {
        const [data] = await achievementsModel.getAll();
        res.json({
            message: 'GET all achievements success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        })
    }
}

const createNew = async (req, res) => {
    const{body, file} = req;
    const image = file.filename;

    if( !body.nama || !body.description || !file){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: body,
        })
    }

    try {
        await achievementsModel.createNew(body, image);
        res.status(201).json({
            message: 'CREATE new achievements success',
            data: {
                achievements: body, image
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const update = async (req, res) =>{
    const {idAchievements} = req.params;
    const{body} = req;
    try {
        await achievementsModel.update(body, idAchievements);
        res.json({
            message: ' UPDATE achievements success',
            data:{
                idAchievements: idAchievements,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const deleteAchievements = async (req,res) =>{
    const {idAchievements} = req.params;
    try {
        await achievementsModel.deleteAchievements(idAchievements);
        res.json({
            message: 'DELETE achievements success',
            data: null
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
    deleteAchievements,
}