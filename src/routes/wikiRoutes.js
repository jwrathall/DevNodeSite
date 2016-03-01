//required for access to the router
var express = require('express');

var wikiRouter = express.Router();

//just a wrapper to return a router with the nav built in
var router = function(nav){
    // this is a top level menu item
    wikiRouter.route('/')
        .get(function(req,res){
            //this is goig to look in the views dir and for sites (line 12 app.set)
            res.render('wiki', {
                    title: 'Rendered',
                    //this is the nav that is passed into the function but defined in app.js
                    nav: nav
                }); 
        }
    );  
    //return the updated siteRouter 
    return wikiRouter;
};
//export so it can be used in app.js
//exports a function that creates a router
module.exports = router;