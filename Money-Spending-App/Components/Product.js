import React from 'react'

export default function Product({product,shopping,setShopping,total,money}) {

    const shoppingItem = shopping.find(item=>item.id === product.id)

    const addShopping=()=>{
        const checkShopping = shopping.find(item=>item.id === product.id)

        if(checkShopping){
            checkShopping.amount += 1
            setShopping([...shopping.filter(item=>item.id !== product.id),checkShopping])
        }
        
        else{
            setShopping([...shopping,{
                id: product.id,
                amount:1
            }])
        }
    }

    const removeShopping= () =>{

        const checkShopping = shopping.find(item=>item.id === product.id)
        const allShopping = shopping.filter(item=>item.id !== product.id)
        checkShopping.amount -= 1
        if(checkShopping.amount === 0){
            setShopping([...allShopping])
        }
        else{
            setShopping([...allShopping,checkShopping])
        }
    }
        

return (
    <div className='product-box'>
        <div className='product'>

            <h3>{product.title}</h3>

                <div className='price'>${product.price}</div>

                <div className='photo'><img src={product.photo}/></div>

            <div className='actions'>

                <button className='sell' disabled={!shoppingItem} onClick={removeShopping}>Sell</button>

                <span className='amount'>{shoppingItem && shoppingItem.amount || 0}</span>

                <button className='buy' disabled={total + product.price > money} onClick={addShopping}>Buy</button>

            </div>  
        </div>   
    </div>
)
}
