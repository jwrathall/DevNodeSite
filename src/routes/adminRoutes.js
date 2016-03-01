var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient; 

var router = function(nav){
    
    adminRouter.route('/addSites')
        .get(function(req,res){
            //27017 default port
            var url = 'mongodb://localhost:27017/sitesApp';
            mongodb.connect(url,function(err, db){
                var collection = db.collection('sites');
                collection.insertMany(sites,
                      function(err,results){
                            res.send(results);
                            db.close();
                        }
                    );
            });
    });
    
    return adminRouter;
};

module.exports = router;