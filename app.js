var express = require('express');
var app = express();

//pull env the port obejct, if it exists use it
var port = process.env.PORT || 5000;

var siteRouter = express.Router();

//middleware: used by express first
//for example if express gets a request for css or js it will look here first
app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine','ejs');

siteRouter.route('/')
    .get(function(req,res){
        //this is goig to look in the views dir and for sites (line 12 app.set)
        res.render('sites', {
                title: 'Rendered',
                nav:[{
                    Link: '/sites', 
                    Text:'Sites'
                },{
                    Link: '/wiki', 
                    Text: 'Wiki'
                },{
                    Link: '/About', 
                    Text:'About'
                }]
            }); 
    }
);

app.use('/sites',siteRouter);

app.get('/', function(req, res){
   res.render('index', {
                title: 'Rendered',
                nav:[{
                    Link: '/sites', 
                    Text:'Sites'
                },{
                    Link: '/wiki', 
                    Text: 'Wiki'
                },{
                    Link: '/About', 
                    Text:'About'
                }]
            }); 
});

//set up node to listen to the port
app.listen(port,function(err){
    console.log('running on '+ port);
});