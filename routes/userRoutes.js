const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const jwt  = require('../util.js/jwt');
const getToken = jwt.getToken;


router.post('/signIn', (req,res) => {
     User.findOne({email: req.body.email,password: req.body.password})
                                 .then((signInUser) => {
         if(signInUser) {
             res.json({
                 name:  signInUser.name,
                 email: signInUser.email,
                 _id: signInUser._id,
                 isAdmin: signInUser.isAdmin,
                 token: getToken(signInUser),
                 msg:'lol' 
             });
         }
         else {
             res.json({msg: 'Invalid email or password'})
         }
     })
});

router.post('/register',(req,res) => {
     const {name,email,password,rePassword} = req.body;

     if(!name || !email || !password || !rePassword) {
         res.json({msg: 'please fill all the details'});
     }
     else if(password !== rePassword) {
         res.json({msg: 'passwords do not match'});
     }
     else {
         User.findOne({email},(registeredUser) => {
        if(registeredUser) {
            res.json({msg: 'user already registered'})
        }
        else {
            const userData = new User({name,email,password})
            userData.save()
                      .then((userData) => {
                          res.json({
                        name:  userData.name,
                        email: userData.email,
                        _id: userData._id,
                        isAdmin: userData.isAdmin,
                        token: getToken(userData),
                        msg: 'lol' 
                          })
                      })
        }
    })
}
});


router.get('/createAdmin',(req,res) =>{
    const userData = new User({
        name: 'shanky',
        email: 'shanky@email.com',
        password: '12345',
        isAdmin: true,
    })
    userData.save()
              .then(user => {
                  res.json(user)
              })
              .catch(err => {
                  res.json({msg: err.message})
              });
});

module.exports = router;