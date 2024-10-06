import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export const Product = (props) =>{
    const {id,title,price,image} = props.data;
    const {cartItems,addToCart,removeFromCart} = useContext(ShopContext)
    const item = cartItems.filter(i => i.id === id)[0];

    return <div className="hover:scale-105 lg:hover:-translate-y-3 w-[200px] p-2 shadow-lg m-1 rounded-xl transition-all ">
        <img src={image} className="w-full px-2" alt={title}/>
        <h3 className="text-2xl">{title}</h3>
        <p>{price}$</p>

        <button onClick={() => addToCart(id)} className="outline-none bg-green-500 hover:bg-green-400 rounded-md p-0.5 px-3 ">+</button>
        <span hidden={!item || item.count === 0} className="mx-2">{item !== undefined ? item.count : "0"}</span>
        <button hidden={!item || item.count === 0}  onClick={() => removeFromCart(id)} className="outline-none bg-green-500 hover:bg-green-400 rounded-md p-0.5 px-3 ">-</button>
    </div>
}