const communitiesModel = require('../models/communities');

const getAll = async(req, res) =>{
    try {
        const [data] = await communitiesModel.getAll();
        res.json({
            message: 'GET all communities success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const getByid = async (req, res) =>{
    const {id} = req.params;
    try {
        const data = await communitiesModel.getByid(id);
        res.json({
            message: 'GET id communitis success',
            data:data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Erroor',
            serverMessage: error.message,
        })
    }
}

const getByuserid = async (req, res) =>{
    const {user_id} = req.params;
    try {
        const data = await communitiesModel.getByuserid(user_id);
        res.json({
            message: 'GET user id communitis success',
            data:data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Erroor',
            serverMessage: error.message,
        })
    }
}

const createNew = async (req, res) => {
    const {body, file}= req;
    const image = file.filename;

    if( !body.user_id || !body.name ||!body.description || !file ){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: body,
        })
    }
    try {
        await communitiesModel.createNew(body, image);
        res.status(201).json({
            message: 'CREATE new communities success',
            data: {
                communities: body, image
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const update = async (req, res) =>{
    const {id} = req.params;
    const {body, file} = req;
    const image =file.filename
    try {
        await communitiesModel.update(body, id, image);
        res.json({
            message: 'UPDATE communities success',
            data: {
                id: id,image,
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

const deleteCommunities = async (req, res) =>{
    const {id} = req.params;
    try {
        await communitiesModel.deleteCommunities(id);
        res.json({
            message: 'DELETE communities success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

module.exports ={
    getAll,
    getByid,
    getByuserid,
    createNew,
    update,
    deleteCommunities,
}