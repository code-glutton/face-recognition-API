const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const register = require('./controller/register');
const signin = require('./controller/signin');
const profile = require('./controller/profile');
const image = require('./controller/image');

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'UzumakiN16',
      database : 'smartbrains'
    }
  });

  
//   knex.select('*').from('users').then(data => {
      
//   });

const app = express();

app.use(bodyParser.json());
app.use(cors());



app.get('/', (req,res) => {
    //  res.send(database.users);
});

app.post('/signin',(req,res) => {signin.handleSignin(req,res,knex,bcrypt)});

app.post('/register', (req,res) => register.handleRegister(req,res,knex,bcrypt));

app.get('/profile/:id', (req,res) => {profile.handleProfileGet(req,res,knex)});

app.put('/image',(req,res) => {image.handleImagePut(req,res,knex)});

app.post('/imageurl',(req,res) => {image.handleApiCall(req,res,knex)});


app.listen(1000 , () => {
    
});