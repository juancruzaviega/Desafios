const Container = require("./main")

async function main() {
    const products = new Container("products.txt")
    // getAll()
    console.log('Muestra todos los productos')
    let allProducts = await products.getAll()
    console.log(allProducts)
    // getById()
    let idToSearch = 4
    console.log(`Muestra por consola un producto con id ${idToSearch}`)
    let productById = await products.getById(idToSearch)
    console.log(productById)
    // save()
    let newProduct1 = { "id": 4, "title": "Madera", "price": 500 }
    await products.save(newProduct1)
    let newProduct2 = { "title": "Pan de pasto", "price": 420 }
    await products.save(newProduct2)
    // deleteById()
    console.log('Prueba de eliminar')
    let productIdToDelete = 5
    await products.deleteById(productIdToDelete)
    allProducts = await products.getAll()
    console.log(allProducts)
    // deleteAll()
    await products.deleteAll()
}
main()