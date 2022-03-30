import React from 'react'
import ShoppingItem from './ShoppingItem'

export default function Shopping ({shopping, products,total,reset}) {
return (
    <div>
    {shopping.map(item => (
    <ShoppingItem item={item} product={products.find(p => p.id === item.id)}/>
    ))}
    <div><h2>Total:${total}</h2></div>
    {total > 0 && (
        <button onClick={reset}>Reset</button>
    )}
    </div>
)
}


