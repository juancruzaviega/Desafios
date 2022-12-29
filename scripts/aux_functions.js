export function checkLength(arr) {
    if (arr.length === 0) {
        console.error('El array esta vacio')
        return false
    }
    return true
}

export function checkId(product, arr) {
    arr.forEach(element => {
        if (element.id == product.id) {
            console.warn('El id del elemento ya existe, se le asignará uno nuevo.')
            return this.newId(product, arr)
        }
    });
    return product.id
}
export function newId(product, arr) {
    arr.sort((a, b) => { return a - b }) // Ordenamos de forma ascendente segun id
    product.id = parseInt(arr[arr.length - 1].id) + 1 // Tomamos el id mas grande, sumamos 1 y lo asignamos al producto
    console.log(`Nuevo id del producto : ${product.id}`)
    return product.id
}