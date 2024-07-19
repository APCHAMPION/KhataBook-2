const cookie = require("cookie-parser");
const Auth = (req,res,next)=>{
    const cookieget = req.cookie();
    if(cookieget){
        next();
    }
    else{
        res.redirect("/login");
    }
}