
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.static('public'))

const Container = require('../../../api/productos')
const products = new Container('../../resources/products.txt')

app.get('/', (req, res) => {
    res.render('formulario', {})
})
app.get('/productos', async (req, res) => {
    const productos = await products.getAll();
    const length = productos.length > 0 ? true : false
    res.render('productos', { productos, length })
})
app.post('/productos', async (req, res) => {
    let product = req.body
    if (product) {
        await products.saveProduct(product)
        console.log(`Producto guardado : ${JSON.stringify(product)}`)
        res.redirect('/')
    }
    else { res.sendStatus(400) }
})

/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))