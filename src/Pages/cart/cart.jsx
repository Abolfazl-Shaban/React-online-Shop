import React, { useContext } from "react"
import { ShopContext } from "../../context/shopContext"
import { Product } from "../shop/product"
import { PRODUCTS } from "../../data/products"

export const Cart = () =>{
  const {cartItems, setCartItems} = useContext(ShopContext)
  console.log(cartItems);

  const clearCart = () =>{
    localStorage.removeItem('cart')
    setCartItems([])
  }

  return <React.Fragment>

  <div className="max-w-[90%] flex gap-5 justify-center flex-wrap mx-auto mt-10 transition-all">
        {/* eslint-disable-next-line*/}
        {PRODUCTS.map(item => {
            if ( cartItems.some(i => i.id===item.id)){
                return <Product key={item.id} data={item} />
            }
        } )}
        {cartItems?.length < 1 && <p className="font-medium">There aren't any product in your cart!</p>}
    </div>
    {localStorage.getItem('cart')?.length >= 1 && <button className="mt-10 bg-red-500 text-white rounded-lg hover:bg-red-400 p-2 px-3 active:bg-red-600" onClick={clearCart}>Clear Cart</button>}
    </React.Fragment>
}