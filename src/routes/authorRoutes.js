const express = require('express');

const authorsRouter = express.Router();

function router(nav){
    var authors = [
        {
            name: 'O V Vijayan',
            genre:'Novel,Short stories Essays',
            img:'o v.jpg'
        },
        {
            name:'Paulo Coelho',
            genre:'Drama,Romance',
            img:'paulo.jpg'
        },
        {
            name:'Yann Martel',
            genre:'Novel,Fiction,Short Story',
            img:'yann.jpg'
        }
    ];
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
           title:'Library App',
           authors
        });
    });

    authorsRouter.get('/:id',function(req,res){
        const id =  req.params.id;
        res.render("author",{
            nav,
            title:'Library App',
            author: authors[id]
        });
    });

    return authorsRouter;

}

module.exports = router;

