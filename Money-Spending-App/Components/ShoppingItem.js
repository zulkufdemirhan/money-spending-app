import React from 'react'

export default function ShoppingItem({item,product}) {
  return (
    <div>
        {product.title} x {item.amount}
    </div>
  )
}
