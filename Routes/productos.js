const router = require('express').Router();
const  productos  = require('../listaProducto.js');

router.get('/productos', (req, res) => {
	res.json({ productos });
});

router.get('/productos/:id', (req, res) => {
	const { id } = req.params
	const producto = productos.find(productos => productos.id === Number(id));
	//console.log(typeof producto)
	if (producto) {
		return res.json(producto)
	} else {
		res.status(404).send({ error: 'Producto no encontrado' });
	}
});

router.post('/productos', (req, res) => {
	const { tittle, price, thumbnail } = req.body;
	const producto = { tittle, price, thumbnail };
	producto.id = productos.length + 1;
	productos.push(producto);
	return res.json(producto)
});

router.put('/productos/:id', (req, res) => {
	const { title, price, thumbnail } = req.body;
	const index = productos.findIndex(
		producto => producto.id === Number(req.params.id)
	);
	if (index >= 0) {
		productos[index] = { title, price, thumbnail };
		productos[index].id = Number(req.params.id);
		res.send(productos[index]);
	} else {
		res.status(404).send({ error: 'Producto no encontrado' });
	}
});

router.delete('/productos/:id', (req, res) => {
	const index = productos.findIndex(
		producto => producto.id === Number(req.params.id)
	);
	if (index >= 0) {
		productos.splice(index, 1);
		res.send({ message: 'Producto eliminado' });
	} else {
		res.status(404).send({ error: 'Producto no encontrado' });
	}
});

module.exports = router;
