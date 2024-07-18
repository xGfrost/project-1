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

module.exports = {
    getAll,
    
}