const express = require('express');
const loginRouter = express.Router();


function router(nav){
    loginRouter.get('/',function(req,res){
        res.render("login",{
            nav,
            title:'Library App'
        });
    });

    loginRouter.post('/new',function(req,res){
        res.send("Login Success");
    });
    
    return loginRouter;

}

module.exports = router;
