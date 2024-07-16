const badgesModel = require('../models/badges');

const getAllbadges = async (req, res) => {
    try {
        const [data] = await badgesModel.getAllbadges();
        res.json({
            message: 'GET all badges success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const createNewbadges = async (req, res) => {
    const {body, file} = req;
    const image = file.filename;

    if( !body.nama || !body.description || !file ){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: body,
        })
    }

    try {
        await badgesModel.createNewbadges(body, image);
        res.status(201).json({
            message: 'CREATE new badges success',
            data: {
                badges: body,image
                

            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const updatebadges = async (req, res) => {
    const {idbadges} = req.params;
    const {body} = req;
    try {
        await badgesModel.updatebadges(body, idbadges);
        res.json({
            message: ' UPDATE badges success',
            data:{
                idbadges: idbadges,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            messgae: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const deletebadges = async (req,res) =>{
    const {idbadges} = req.params;
    try {
        await badgesModel.deletebadges(idbadges);
        res.json({
            message: 'DELETE badges success',
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
   createNewbadges, 
   getAllbadges,
    updatebadges,
    deletebadges,
}