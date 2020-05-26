const express = require('express');
const routes = express.Router();

routes.get('/users', (request, response) => {
    return response.json({
        evento : 'Festa',
        aluno : 'Lucas'
    })
});

module.exports = routes;