import React from 'react'
import { moneyType } from '../HeaderMoney'


export default function Main({money, total}) {
return (
    
        <div className='header'>
            {total > 0 && money - total !== 0 && (
                
                <div className='mainMoney'> <h2>You have last $ {moneyType(money - total)}!</h2></div>
            )}

            {total === 0 && (
                
                <div><h2> You have $ {moneyType(money)}!</h2></div>
            )}

            {money - total === 0 && (
                
                <div> <h2>You do not have money !</h2></div>
            )}
        </div>
    
)
}



// {total > 0 && money - total !== 0 && (
            
//     <div> You have last {money-total}$!</div>
// )}

// {total === 0 && (
    
//     <div> You have {money}$!</div>
// )}

// {money - total === 0 && (
    
//     <div> You do not have money !</div>
// )}


