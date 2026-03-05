//Importing express into our index file
const express = require('express');

//Importing CORS into our index file
const cors    = require('cors');

//Importing .ENV into out index file
require ('dotenv').config();


//This is the first level of connection
//Middleware code is written below this line of code.
const app = express();


//This the port for the front-end section of our code.
var corsOptions = {
  origin: 'http://localhost:3000',
}

//Middleware code
app.use(cors(corsOptions));

//ACCOUNT SECTION
//Importing the accountRoutes.js file
const accountRoute = require('./routes/accountRoutes');

//TRASNFER SECTION
//Importing the transferRoutes.js file
const transferRoute = require('./routes/transferRoutes');


//Middleware code
app.use(express.json());

//ACCOUNT SECTION
// app.use(routes);//account
app.use('/Account', accountRoute);

//TRANSFER SECTION
// app.use(routes);//transfer
app.use('/Transfer', transferRoute);


//Middleware code
app.use(express.urlencoded({extended: true}));

//Handling 404 error
app.use((req, res, next)=>{
  const err  = new Error("Not Found");
  err.status = 404;
  next(err);
})

//Error Handler (Global)
// This code will handle all other forms of errors apart from the 404 that is defined above.
//To be confirmed by trainer (added res)
app.use((err, req, res, next)=>{
  res.status(err.status || 500);
  res.send({
    error:{
      status: err.status || 500,
      message: err.message
    }
  });
});

//This is server code, an introduction to the line of code below.
const PORT = process.env.PORT || 4000

//Creating the server at this point.
app.listen(PORT, ()=>{
  console.log(`Server is running on Port: ${PORT}`);
});