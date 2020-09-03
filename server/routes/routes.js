const express = require('express');
const app = express();

const routes = (nextApp) => {
    app.use(require('./product')(nextApp));

    return app;
}

module.exports = routes;