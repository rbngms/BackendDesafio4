const express = require('express');
const routerProductos = require('./routes/productos.js');

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/desafio4', routerProductos);

const server = app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`)
);
server.on('error', err => console.log(`Error: ${err}`));
