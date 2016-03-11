var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient; 

var sites=[
    {
        url:'http://webstage.adlibsys.com',
        title: 'adlib - webstage'
    },
    {
        url:'dev.adlibsys.com',
        title: 'adlib - local'
    },
    {
        url:'adlibsoftware.com',
        title: 'adlib - live'
    },
    {
        url:'http://webstage.adlibsys.com/sitecore/login',
        title: 'sitecore'
    },
     {
        url:'https://vmdcp01/Account/LogOn?ReturnUrl=%2f',
        title: 'portal - staging'
    },
    {
        url:'http://portal.adlibsoftware.com/',
        title: 'portal - live'
    }
];

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