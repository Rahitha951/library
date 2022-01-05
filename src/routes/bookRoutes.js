const express = require('express');

const booksRouter = express.Router();
function router(nav){
    var books =[
        {
            title: 'Khasakinte Ithihasam',
            author: 'O V Vijayan',
            genre: 'Novel',
            img: "khasakinde.jpg"
          
            
        },
        {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            genre: 'Fantasy',
            img: "alche.jpg"
        },
        {
            title: 'Life Of Pi',
            author: 'Yann Martel',
            genre: 'Adventure Fiction',
            img: "pi.jpg"
        }
    ]
    
    
    
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
           title:'Library App',
           books
        });
    });
    
   
    
    
    booksRouter.get('/:id',function(req,res){
        const id =  req.params.id;
        res.render('book',{
            nav,
            title:'Library App',
            book: books[id]
        });
    });

    return booksRouter;
}

module.exports = router;