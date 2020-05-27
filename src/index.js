const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// app.use(cors({
//     origin: 'http://meuapp.com'
// }));

app.use(cors());
app.use(express.json());
app.use(routes);

//Query Params http://localhost:3333/users?name=Lucas&idade=20
// app.get('/users', (request, response) => {
//     const params = request.query;

//     console.log(params);
//     return response.json({
//         evento : 'Festa',
//         aluno : 'Lucas'
//     })
// });

//Route Params http://localhost:3333/users?name=Lucas&idade=20
// app.post('/users/:id', (request, response) => {
//     const params = request.params;

//     console.log(params);
//     return response.json({
//         evento : 'Festa',
//         aluno : 'Lucas'
//     })
// });

//Request Body
//necessário informar para o express que o corpo será json 
// app.use(express.json());
//sempre antes da requisição
//Enviado no Body insomnia Json {id:teste, name:'lucas'}
// app.post('/users/:id', (request, response) => {
//     const params = request.body;

//     console.log(params);
//     return response.json({
//         evento : 'Festa',
//         aluno : 'Lucas'
//     })
// });

/*
Driver Query Builder = KNEX
npm install knex
npm install sqlite3
npx knex init
*/

app.listen(3333);