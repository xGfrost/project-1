const cleaningservicesModel = require('../models/cleaning_services');

const getAll = async (req, res) => {
    try {
        const [data] = await cleaningservicesModel.getAll();
        res.json({
            message: 'GET all cleaning services success',
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
    const {user_id} = req.params;
    try {
        const data = await cleaningservicesModel.getByid(user_id);
        res.json({
            message: 'GET user id cleaning services success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const createnew = async (req, res) => {
    const {body} = req;
    if( !body.user_id || !body.description || !body.address || !body.customer_contact || !body.datetime){
        return res.status(400).json ({
            message: 'Anda mengirimkan data yang salah',
            data: body,
        })
    }
    try {
        await cleaningservicesModel.createnewServices(body);
        res.status(201).json({
            message: 'CREATE new cleaning services success',
            data: {
                data: body,
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const updatestatus = async(req, res) =>{
    const {idCleaningservices} = req.params;
    const {body} = req;
    try {
        await cleaningservicesModel.updatestatus(body, idCleaningservices);
        res.json({
            message: ' UPDATE status cleaning services success',
            data:{
                idCleaningservices: idCleaningservices,
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

module.exports = {
    getAll,
    getByid,
    createnew,
    updatestatus,
}