const jwt= require("jsonwebtoken")

const Jwt_admin_secret = "pqrst";


function adminMiddleware(req,res,next){
   const token = req.headers.token;
   const decoded= jwt.verify(token,Jwt_admin_secret)

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
 adminMiddleware
}
