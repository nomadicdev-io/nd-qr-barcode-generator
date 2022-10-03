const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const userList = require('./routes/routes');
const emailrouter = require('./routes/emailroutes');
// Express App
const app = express();

// Mogodb
const DB = "mongodb://127.0.0.1:27017/project-t-a";

mongoose.connect(DB).then(()=> console.log('Connected To DB!    '))

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/userslist', userList); 
app.use('/api/v1/emailtest', emailrouter); 


// Server
const port = 5000;

app.listen(port, ()=> {
    console.log(`Bhoom! Server started @ ${port} `);
}); 