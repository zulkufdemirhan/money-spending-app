import React from 'react'
import Main from './component/Main'
import Product from './component/Product'
import Shopping from './component/Shopping'
import products from './products.json'
import { useState,useEffect } from 'react'
import './Style.css'




export default function App() {

    const [money,setMoney]=useState(100000);

    const [shopping , setShopping]=useState([]);

    const [total,setTotal]=useState();

    const reset = () => {
      setShopping([])
    }

    useEffect( () => {
      
        setTotal(
          shopping.reduce((acc, item) => {
            return acc + (item.amount * (products.find(product => product.id === item.id).price))
          },0),
        )
      
    },[shopping])
  
  return (
    <div className='box'>

        <Main  money={money} total={total}/>
        
        {products.map(product=>(
          <Product key={product.id} total={total} money={money} shopping={shopping} setShopping={setShopping} product={product}/>))}
        <Shopping reset={reset} total={total} products={products} shopping={shopping}/>

    </div>
  )
}

