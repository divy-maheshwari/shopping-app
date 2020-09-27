const jwt = require('jsonwebtoken');
const secret = require('../config.js/keys').JWT_SECRET;

 const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    },secret,{
        expiresIn: '24h'
    })
}

const isAuth = (req,res,next) => {
    const token = req.headers.authorization;
    if(token){
        const onlyToken = token.slice(7,token.length);
        jwt.verify(onlyToken,secret,(err,decode) => {
            if(err) {
                return res.status(401).json({msg: 'Invalid token'})
            }
            req.user = decode;
            next();
            return;
        });
    }
    else {
        res.status(401).json({msg: 'Token is not supplied'})
    }
}

const isAdmin = (req,res,next) => {
    if(req.user && req.user.isAdmin){
        return next();
    }
    else {
      return  res.status(401).json({msg: 'Admin token is invalid'});
    }
}


module.exports = {
    getToken,
    isAuth,
    isAdmin
}