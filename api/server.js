const express = require('express');

const server = express();

const adoptersRouter = require('./adopters/adopters-router')
const dogsRouter = require('./dogs/dogs-router')

server.use(express.json());

server.use('/api/adopters', adoptersRouter);
server.use('/api/dogs', dogsRouter)

// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Shelter API</h>
    <p>Welcome to the Shelter API</p>
  `);
});

// or fallthrough
// server.get('*', (req, res) => {
//   res.status(404).send(`
//     <h2>Shelter API</h>
//     <p>We cannot find that resource</p>
//   `);
// });

module.exports = server;
