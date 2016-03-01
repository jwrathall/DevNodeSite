//required for access to the router
var express = require('express');

var siteRouter = express.Router();

var mongodb = require('mongodb').MongoClient; 

//just a wrapper to return a router with the nav built in
var router = function(nav){
    siteRouter.route('/')
        .get(function(req,res){
            var url = 'mongodb://localhost:27017/sitesApp';
             mongodb.connect(url,function(err, db){
                var collection = db.collection('sites');
                 //https://www.npmjs.com/package/mongodb
                collection.find().toArray(
                    function(err,results){
                        //this is goig to look in the views dir and for sites (line 12 app.set)
                        res.render('sites', {
                                title: 'Rendered',
                                //this is the nav that is passed into the function but defined in app.js
                                nav: nav,
                                sites:results
                            }); 
                    }
                );
             });
            
        }
    );  
    //return the updated siteRouter 
    return siteRouter;
};
//export so it can be used in app.js
//exports a function that creates a router
module.exports = router;


