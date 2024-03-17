// Chargement du module http const 
const express = require('express') 
const morgan = require('morgan')
const favicon = require('serve-favicon')
const sequelize = require('./src/db/sequelize')
const bodyParser = require('body-parser')

const app = express()
const hote = '127.0.0.1' 
const port = 8001

//Initialisation de la BD
sequelize.initDB()

//Les middlewares
app.use(favicon(__dirname+"/dossier.ico"))
.use(morgan("dev"))
.use(bodyParser.json())

//Routes: endpoints
//Route racine
app.get('/', (req, res)=>{
    res.send('Bienvenue dans le cours de javascript avancé')
})

//Route pour visualiser tous les engistrements --> GET: /api/voitures 
require('./src/endpoints/Voiture/findAllVoiture')(app)
/*ou
    const allVoiture = require('./src/endpoints/findAllVoiture')
    allVoiture(app)
*/
//Route pour visualiser un  enregistrement --> GET: /api/voitures/id 
require('./src/endpoints/Voiture/findOneVoiture')(app)
//Route pour insérer un enregistrement --> POST: /api/voitures
require('./src/endpoints/Voiture/createVoiture')(app)
//Route pour modifier un enregistrement --> PUT ou PATCH: /api/voitures/id
require('./src/endpoints/Voiture/updateVoiture')(app)
//Route pour supprimer un enregistrement --> DELETE: /api/voitures/id
require('./src/endpoints/Voiture/deleteVoiture')(app)

// Route pour visualiser tous les enregistrements des animaux -> GET: /api/animaux 
require('./src/endpoints/Animal/findAllAnimal')(app);

// Route pour visualiser un enregistrement des animaux -> GET: /api/animaux/id 
require('./src/endpoints/Animal/findOneAnimal')(app);

// Route pour insérer un enregistrement des animaux -> POST: /api/animaux
require('./src/endpoints/Animal/createAnimal')(app);

// Route pour modifier un enregistrement des animaux -> PUT ou PATCH: /api/animaux/id
require('./src/endpoints/Animal/updateAnimal')(app);

// Route pour supprimer un enregistrement des animaux -> DELETE: /api/animaux/id
require('./src/endpoints/Animal/deleteAnimal')(app);

/*app.get('/api/voitures/:id/', (req, res)=>{
    const id = parseInt(req.params.id)
    const voiture = voitures.find(voiture => voiture.id === id )
    voiture!= null ? res.send(`La voiture dont l'id est ${id} est ${voiture.name} `):
    res.send(`La voiture dont l'id est ${id} n'existe pas`)
    
})

app.get('/api/animaux/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    const animal =  animals.find(animal=>animal.id===id)
    animal!= null ? res.send(`L'animal dont l'id est ${id} est ${animal.nom}`):
    res.send(`l'animal dont l'id est ${id} n'existe pas`)
})*/

// Démarrage du serveur 
app.listen(port, () => { console.log(`server is running on ${hote}:${port}`) })