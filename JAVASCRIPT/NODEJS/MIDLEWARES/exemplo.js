var express = require('express'), // chamar a app e dar configurações minimas
    app = express.createServer(),                                                                                                                                                 
    port = 1337;

function middleHandler(req, res, next) {
    // tratar erros
    var err = req.body.foo == null;
    if (!err) next();
    else res.send("a variavel foo não tem dados!");
}

app.use(function (req, res, next) {
    // escrever na BD
    console.log(JSON.stringify(req.body));                                                                                                             
    next();
});

app.use(function (req, res, next) {
    // outros processos                                                                                                            
    next();
});

app.get('/', middleHandler, function (req, res) {
    console.log(ultimo passo);
    res.send("Obrigado pelo seu registo!");
});

app.listen(port);  // iniciar o servidor
console.log('start server');


// Repara que neste exemplo em cima o app.get tem um middleware como argumento. Podes usar middleware encadeados também dessa maneira. Aqui fica um exemplo real:
/*
app.get('/', githubEvents, twitter, getLatestBlog, function(req, res){
    res.render('index', {
        title: 'MooTools',
        site: 'mootools',
        lastBlogPost: res.locals.lastBlogPost,
        tweetFeed: res.locals.twitter
    });
});
*/