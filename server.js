const express = require('express');
const fileUpload = require('express-fileupload')
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const DB = require('./config.js/keys').MONGODB_URL;
const app = express();
app.use(cors());
app.use(fileUpload());


mongoose.connect(DB,{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true },() => console.log('connected to DB'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/api/users',require('./routes/userRoutes'));
app.use('/api/products',require('./routes/productRoutes'));




const port = 5000;
app.listen(port,() => console.log(`server running at ${port}`));