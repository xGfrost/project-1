const user_achievementsModel = require('../models/user_achievements');

const getAll = async (req, res) => {
    try {
        const [data] = await user_achievementsModel.getAll();
        res.json({
            message: 'GET all user_achievements success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        })
    }
}

module.exports ={
    getAll,
}