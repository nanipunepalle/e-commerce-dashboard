var products = []
export const add_cartproducts = (product)=>{
    products.push(product)
    console.log(product);
    console.log(products);
}

export const delete_cartproducts = (product) => {
    console.log(product)
    products = products.filter((pr)=>{return pr !== product });
    console.log(products)
}

export const get_cart_products = products



