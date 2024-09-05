const jwt = require('jsonwebtoken');
const { secretKey } = require('../configuration/jwtconfig');

function authenticateToken(req, res, next){
    const authHeader = req.header("Authorization");
    if(!authHeader){
        return res.status(401).json({message: "Unauthorized: Missing Token!"}); 
    }
    const [bearer, token] = authHeader.split(" ");
    if(bearer !== "Bearer"|| !token){
        return res.status(401).json({message: "Unauthorized: Invalid Token!"});
    }

    jwt.verify(token, secretKey, (error, user) => {
        if(error){
            return res.status(403).json({message: "Forbidden: Invalid Token!"});
        }
        req.user = user;
        next();

    })
}    


function verifyToken(token){
    jwt.verify(token, secretKey);

}

module.exports = { authenticateToken, verifyToken};