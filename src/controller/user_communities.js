const usercommunitiesModel = require('../models/user_communities');

const getAll = async(req, res) => {
    try {
        const [data] = await usercommunitiesModel.getAll();
        res.json({
            message: 'GET all user communities success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const getByid = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await usercommunitiesModel.getByid(id);
        res.json({
            message: 'GET user communities id success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const getByuserid = async (req, res) => {
    const {user_id} = req.params;
    try {
        const data = await usercommunitiesModel.getByuserid(user_id);
        res.json({
            message: 'GET user communities id success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const getBycommunitiesid = async (req, res) => {
    const {community_id} = req.params;
    try {
        const data = await usercommunitiesModel.getBycommunitiesid(community_id);
        res.json({
            message: 'GET user communities id success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const createNew = async (req,res) => {
    const {body} = req;
    try {
        await usercommunitiesModel.createNew(body);
        res.status(201).json({
            message: 'CREATE user communities success',
            data:{
                user_communities:body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const deleteusercommuniites = async (req, res) => {
    const {id} = req.params;
    try {
        await usercommunitiesModel.deleteusercommuniites(id);
        res.json({
            message: 'DELETE user communities success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const update = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    try {
        await usercommunitiesModel.update(body, id);
        res.json({
            message: 'UPDATE user communities success',
            data: {
                id: id,
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
    getByid,
    getByuserid,
    getBycommunitiesid,
    createNew,
    deleteusercommuniites,
    update,

    
}