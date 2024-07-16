const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        const formattedResults = data.map(item => ({
            id: item.user_id,
            nama: item.user_name,
            foto_profil: item.foto_profil,
            poin: item.poin,
            coin: item.coin,
            created_at: item.created_at_users,
            updated_at: item.updated_at_users,
            badge_id: item.badge_id,

            badges: {
              id: item.badge_id,
              nama: item.badge_nama,
              description: item.description,
              icon: item.icon,
              created_at: item.created_at_badges,
              updated_at: item.updated_at_badges  
            },
            user_achievements:{
                id: item.id_userachievements,
                user_id: item.user_id,
                achievements_id: item.achievements_id,
                created_at: item.created_at_userachievements,
                update_at: item.updated_at_userachievements
            },
            achievements:{
                id: item.achievements_id,
                nama: item.achievements_name,
                description: item.description,
                icon: item.icon_achievvements,
                created_at: item.created_at_achievements,
                updated_At: item.updated_at_achievements
            }
            
          }));

        res.json({
            message: 'GET  All user success',
            data: formattedResults
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        })
    }
}

const createNewUser = async (req, res) => {
    const {body, file} = req;
    const imageName = file.filename;

    if( !body.nama || !file || !body.poin || !body.role || !body.coin){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: body,
        })
    }

    try {
        await UsersModel.createNewUser(body, imageName);
        res.status(201).json({
            message: 'CREATE new user success',
            data: {
                user: {
                    nama: body.nama,
                    poin: body.poin
                },
                image: imageName
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUser(body, idUser);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: idUser,
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

const deleteUser = async (req, res) =>{
    const {idUser} = req.params;
    try {
        await UsersModel.deleteUser(idUser);
        res.json({
            message: 'DELETE user success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        })
    }
}

const getuserbyid = async (req, res) => {
    const {idUser} = req.params;
    try {
        const [data] = await UsersModel.getuserbyid(idUser);

        const formattedResults = data.map(item => ({
            id: item.user_id,
            nama: item.user_name,
            foto_profil: item.foto_profil,
            poin: item.poin,
            coin: item.coin,
            created_at: item.created_at_users,
            updated_at: item.updated_at_users,
            badge_id: item.badge_id,

            badges: {
              id: item.badge_id,
              nama: item.badge_nama,
              description: item.description,
              icon: item.icon,
              created_at: item.created_at_badges,
              updated_at: item.updated_at_badges  
            },
            user_achievements:{
                id: item.id_userachievements,
                user_id: item.user_id,
                achievements_id: item.achievements_id,
                created_at: item.created_at_userachievements,
                update_at: item.updated_at_userachievements
            },
            achievements:{
                id: item.achievements_id,
                nama: item.achievements_name,
                description: item.description,
                icon: item.icon_achievvements,
                created_at: item.created_at_achievements,
                updated_At: item.updated_at_achievements
            }
            
          }));

        res.json({
            message: 'GET  All user success',
            data: formattedResults
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    getuserbyid,
}