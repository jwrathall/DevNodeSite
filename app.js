var express = require('express');
var app = express();

//pull env the port obejct, if it exists use it
var port = process.env.PORT || 5000;

var nav = [{
                Link: '/sites', 
                Text:'Sites'
            },{
                Link: '/wiki', 
                Text: 'Wiki'
            },{
                Link: '/About', 
                Text:'About'
            }];

//view the siteRouter, notice the nav param, this is custom for the site router
var siteRouter = require('./src/routes/siteRoutes.js')(nav);
var wikiRouter = require('./src/routes/wikiRoutes.js')(nav);
var adminRouter = require('./src/routes/adminRoutes.js')(nav);

//middleware: used by express first
//for example if express gets a request for css or js it will look here first
app.use(express.static('public'));

app.set('views', './src/views');

app.set('view engine','ejs');

app.use('/sites',siteRouter);
app.use('/wiki',wikiRouter);
app.use('/admin', adminRouter);

app.get('/', function(req, res){
   res.render('index', {
                title: 'Rendered',
                nav: nav
            }); 
});

//set up node to listen to the port
app.listen(port,function(err){
    console.log('running on '+ port);
});