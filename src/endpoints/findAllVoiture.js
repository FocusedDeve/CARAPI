const {Voiture} = require('../db/sequelize')
//exporter tout notre app
module.exports = app => {
    // GET /api/voitures -> Récupérer toutes les voitures de la BDD
    app.get('/api/voitures', (req, res) =>{ 
        Voiture.findAll()
            .then(v=>{
                const message = 'liste des voiture'
                res.json({message: message , data : v})
            })
    }
}