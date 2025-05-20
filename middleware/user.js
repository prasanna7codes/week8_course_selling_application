const jwt= require("jsonwebtoken")

const Jwt_user_secret = "abcd1234";


function userMiddleware(req,res,next){
   const token = req.headers.token;
   const decoded= jwt.verify(token,jwt_user_secret)

   if(decoded){
    req.userId=decoded.userId
    next()
   }else{
    res.json({
        message : " you are not signed in "
    })
   }


}


module.exports={
 userMiddleware
}
