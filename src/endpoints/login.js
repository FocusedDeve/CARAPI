/*const { User } = require("../db/sequelize")

module.exports = app => {
    app.post('api/login', (req, res)=>{
    let username = req.body.username
    let password = req.body.password

    User.findOne({
        Where:{
            username: username
        }
        })
        .then(user=>{
            bcrypt.compare(password, user.password)
            .then(isValid =>{
                if(isValid){
                    const message = `Vous etes bien authentifié`
                    return res.status(200).json({message, data: user})
                }
                const message =
            })
        })
    })
}*/