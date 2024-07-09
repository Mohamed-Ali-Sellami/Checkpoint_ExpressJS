

//on installe au terminal express avec la commende suivante : npm install express


//et au fichier server on ecrit :

//importation
const express=require('express')
const connectdb=require('./config/connectdb')

require('dotenv').config()    //faza jdida mta3nodemon

//initiation server
const app=express()



connectdb()

const port=process.env.PORT

app.use(express.json())
app.use('/produit' , require('./routes/produit'))

app.use('/client' , require('./routes/client'))

//creation server
app.listen(port,(err)=>err?console.log(err):console.log(`server is running in ${port}`));   
