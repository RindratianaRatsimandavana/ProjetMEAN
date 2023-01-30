const express= require('express');
const app= express();

const bodyParser=require('body-parser');


const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/mean1' 
mongoose.connect(url, { useNewUrlParser: true }) 
    const db = mongoose.connection
    db.once('open', _ => {
      console.log('Database connected:', url)
    })
    
    db.on('error', err => {
      console.error('connection error:', err)
    })


//use before the other middleware
app.use(bodyParser.urlencoded({extended: false})); //ref miparse zavatra avy amin form no mampiasa an'ity dia tsy ilaina eto
app.use(bodyParser.json()); //refa miparse req post amin api

//get routes
const userRoutes= require('./routes/user');
const depotVoitureRoutes= require('./routes/depotVoiture');
const reparationsRoutes= require('./routes/reparation');
//const donneeGarageRoutes= require('./routes/donneeGarage');


// cors
app.use((req,res,next) => {
        res.header("Access-Control-Allow-Origin","*");
        // res.header(
        //     "Access-Control-Allow-Headers",
        //     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        // );
        res.header(
            "Access-Control-Allow-Headers",
            "*"
        );
        //req.method ahitana anle type de methode get, put, delete,...
        if(req.method === 'OPTIONS')
        {
            //definition des methodes supportés par l api
            res.header('Access-Control-Allow-Methods', 'PUT,PATCH,DELETE,POST,GET');
            //status général des réponses 
            return res.status(200).json();
        }
        next(); //continue sur les autres middlewares de routages
    }
    

);

//use routes
//otrany hoe filter , ze /products rehetre dia makany amle router
app.use('/users',userRoutes);
app.use('/depotVoiture',depotVoitureRoutes);reparationsRoutes
app.use('/reparation',reparationsRoutes);

// de haut en bas ny faakianle programa anle code 
// dia raha tsy nahita nifanaraka teo ambony izy dia maketo ambany
app.use((req,res,next) =>
    {
        const error= new Error('Not found');
        error.status = 404;
        next(error);
    }

)

app.use((error,req,res,next) =>
    {
        res.status(error.status || 500);
        res.json(
            {
                error:{
                    message: error.message
                }
            }
        );
    }

);

// app.get('/',function(req,res)
//     {
//         res.status(200).json(
//             {
//                 message:'It works!'
//             }
//         )
//     }
// );

app.listen(3000,function()
    {
        console.log('! ');
    }

)