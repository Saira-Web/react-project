
import React from "react"
const product = [{Name: "laptop", Price:"$799"}, {Name: "iPhone", Price:"$999"}];

const ProductList = () => {
    return (
        <section> 
            <div>
                <h2>Products</h2>
    {product.map ((item) => {return <h1>{item.Name} {item.Price}</h1> })}

            </div>
        </section>
    );
}

export default ProductList;