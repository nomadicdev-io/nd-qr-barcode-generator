const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const userList = require('./routes/routes');
const emailrouter = require('./routes/emailroutes');

dotenv.config({path: './.env'});

// Express App
const app = express();

// Mogodb
const DB = process.env.DB_CONNECTION;
mongoose.connect(DB).then(()=> console.log('Fucking DB is Connected!'))

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/userslist', userList); 
app.use('/api/v1/email', emailrouter); 
app.use(express.static('client'))

// Server
const port = 5000;

app.listen(port, ()=> {
    console.log(`Bhoom! Server started @ ${port} `);
}); 