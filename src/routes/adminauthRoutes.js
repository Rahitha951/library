const express = require('express');
const adminauthRouter = express.Router();

function router(nav){
    adminauthRouter.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title:'Library App'
        });
    });

    adminauthRouter.get('/add',function(req,res){
        res.send("Author Added");
    })

    return adminauthRouter;

}

module.exports = router;