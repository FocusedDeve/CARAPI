// Chargement du module http const 
const express = require('express') 
const morgan = require('morgan')
const favicon = require('serve-favicon')

const app = express()
const hote = '127.0.0.1' 
const port = 8000 

//initialisation de la DB
sequelize.initDB()    

//Les middleware
app.use(favicon(__dirname+"/dossier.ico"))
.use(morgan("dev"))

//Routes
app.get('/', (req, res)=>{
    res.send('Bonjour tout le LPSIC')
})

//Routes pour visualiser tous les enregistrement --> GET
//const allVoiture = require( './src/endpoints/findAllVoiture')(app)
//findAllVoiture(app)
//ou
require( './src/endpoints/findAllVoiture')(app)

// Routes pour visualiser une voiture par son id --> GET
require('./src/endpoints/findOneVoiture')(app)
//Ajout d'une voiture --> POST
require('./src/endpoints/createVoiture')(app)
//mise d'une voiture  --> PUT
require('./src/endpoints/updateVoiture')(app)
//Suppression d'une voiture --> DELETE
require('./src/endpoints/deleteVoiture')(app)



app.get('/api/voitures/:id/', (req, res)=>{
    const id = parseInt(req.params.id)
    const voiture = voitures.find(voiture => voiture.id === id )
    voiture!= null ? res.send(`La voiture dont l'id est ${id} est ${voiture.name} `):
    res.send(`La voiture dont l'id est ${id} n'existe pas`)
    
})

// Démarrage du serveur 
app.listen(port, () => { console.log(`server is running on ${hote}:${port}`) })


