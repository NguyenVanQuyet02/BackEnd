require('dotenv').config()
const express = require('express')
//import express from 'express';
const configViewEngine = require('./config/viewEngine');


const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web');

const connection = require('./config/database');

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies


//config template engine
configViewEngine(app);

app.use('/', webRoutes);//('tien to : duong link dung de phan biet hoac tao ra cac route')



// simple query
// connection.query(
//   'SELECT * FROM Users u',
//   function(err, results, fields) {
//     console.log("=========> Results = : ", results); // results contains rows returned by server
//   }
// );


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})