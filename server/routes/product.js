const express = require('express');
const app = express();

const routes = (nextApp) => {
    app.get('/product/:id', (req,res) => {
        const actualPage = '/product';
        console.log(`Entró a productos en backend con el id: ${req.params.id}`);
        const queryParams = {id: req.params.id};
        nextApp.render(req, res, actualPage, queryParams);
    })

    return app;
}



module.exports = routes;