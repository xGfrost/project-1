const dbPool = require('../config/database');
const { get } = require('../routes/badges');

const getAllUsers = () =>{
  const SQLQuery = `
  SELECT 
    users.id AS user_id, 
    users.nama AS user_name, 
    users.foto_profil AS foto_profil,
    users.poin AS poin,
    users.role AS role,
    users.coin AS coin,
    users.created_at AS creted_at_users,
    users.updated_at AS updated_at_users,
    users.badge_id AS badge_id, 
    badges.id AS badge_id, 
    badges.nama AS badge_nama,
    badges.description AS description,
    badges.icon AS icon,
    badges.created_at AS created_at_badges,
    badges.updated_at AS updated_at_badges,
    user_achievements.id AS id_userachievements,
    user_achievements.user_id AS user_id,
    user_achievements.achievements_id AS achievements_id,
    user_achievements.created_at AS created_at_userachievements,
    user_achievements.updated_at AS updated_at_userachievements,
    achievements.id AS achievements_id,
    achievements.nama AS achievements_name,
    achievements.description AS description,
    achievements.icon AS icon_achievements,
    achievements.created_at AS created_at_achievements,
    achievements.updated_at AS updated_at_achievements
  FROM 
    users 
  LEFT JOIN 
    badges 
  ON 
    users.badge_id = badges.id
    LEFT JOIN
      user_achievements
  ON
    users.id = user_achievements.user_id
    LEFT JOIN
      achievements
  ON
    user_achievements.achievements_id = achievements.id
`;

    return dbPool.execute(SQLQuery);

}

const createNewUser = (body, imageName) => {
    const SQLQuery = `INSERT INTO users (nama, foto_profil, poin, role, coin) 
                        VALUES ('${body.nama}', '${imageName}', '${body.poin}', '${body.role}', '${body.coin}')`;

                        return dbPool.execute(SQLQuery);
}

const updateUser = (body, idUser, imageName) => {
    const SQLQuery = `UPDATE users
                        SET nama='${body.nama}', foto_profil='${imageName}', poin='${body.poin}', role='${body.role}', coin='${body.coin}'
                        WHERE id=${idUser}`;

    return dbPool.execute(SQLQuery);
}

const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id=${idUser}`;

    return dbPool.execute(SQLQuery);
}

const getuserbyid = (idUser) =>{
  const SQLQuery = `
  SELECT 
    users.id AS user_id, 
    users.nama AS user_name, 
    users.foto_profil AS foto_profil,
    users.poin AS poin,
    users.role AS role,
    users.coin AS coin,
    users.created_at AS creted_at_users,
    users.updated_at AS updated_at_users,
    users.badge_id AS badge_id, 
    badges.id AS badge_id, 
    badges.nama AS badge_nama,
    badges.description AS description,
    badges.icon AS icon,
    badges.created_at AS created_at_badges,
    badges.updated_at AS updated_at_badges,
    user_achievements.id AS id_userachievements,
    user_achievements.user_id AS user_id,
    user_achievements.achievements_id AS achievements_id,
    user_achievements.created_at AS created_at_userachievements,
    user_achievements.updated_at AS updated_at_userachievements,
    achievements.id AS achievements_id,
    achievements.nama AS achievements_name,
    achievements.description AS description,
    achievements.icon AS icon_achievements,
    achievements.created_at AS created_at_achievements,
    achievements.updated_at AS updated_at_achievements
  FROM 
    users 
  LEFT JOIN 
    badges 
  ON 
    users.badge_id = badges.id
    LEFT JOIN
      user_achievements
  ON
    users.id = user_achievements.user_id
    LEFT JOIN
      achievements
  ON
    user_achievements.achievements_id = achievements.id
    WHERE 
      user_id = ?
`;
    return dbPool.execute(SQLQuery, [idUser]);
}


module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    getuserbyid,
}