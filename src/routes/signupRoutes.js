const express = require('express');
const signupRouter = express.Router();

function router(nav){

    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title:'Library App'
        });
    });

    signupRouter.post('/new',function(req,res){
        res.send("Signup Success");
    });

    return signupRouter;
}

module.exports = router;