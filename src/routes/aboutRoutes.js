//required for access to the router
var express = require('express');

var aboutRouter = express.Router();

//just a wrapper to return a router with the nav built in
var router = function(nav){
    siteRouter.route('/')
        .get(function(req,res){
            //this is goig to look in the views dir and for sites (line 12 app.set)
            res.render('sites', {
                    title: 'Rendered',
                    //this is the nav that is passed into the function but defined in app.js
                    nav: nav
                }); 
        }
    );  
    //return the updated siteRouter 
    return siteRouter;
};
//export so it can be used in app.js
//exports a function that creates a router
module.exports = router;