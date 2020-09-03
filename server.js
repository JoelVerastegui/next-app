const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';

const port = process.env.PORT || 8080;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // ===== Middlewares ===== //

    // parse application/x-www-form-urlencoded
    server.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    server.use(bodyParser.json())

    // ======================= //

    // server.get('/post/about/:person', (req,res) => {
    //     const actualPage = '/post/about'
    //     console.log(`About: ${req.params.person}`);
    //     const queryParams = {person: req.params.person};
    //     app.render(req,res,actualPage, queryParams);
    // })

    // server.get('/post/:id', (req,res) => {
    //     const actualPage = '/post';
    //     console.log(`Params: ${req.params.id}`);
    //     const queryParams = {id: req.params.id};
    //     app.render(req, res, actualPage, queryParams);
    // })

    server.use(require('./server/routes/routes')(app));

    server.get('*', (req,res) => {
        return handle(req,res);
    })

    server.listen(port, (err) => {
        if(err) throw err;
        console.log(`Server listening on port ${port}...`);
    })
}).catch(e => {
    console.error(`Server error on running: ${e}`);
    process.exit(1);
})