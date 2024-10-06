import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
export const Header = () =>{

    const {cartItems} = useContext(ShopContext)
 
    return <div className='  text-gray-200  bg-gray-800 '>
        <div className='max-w-[1000px] flex justify-between p-4 items-center mx-auto'>

        

        <ul className='flex *:mx-2'>
            {/* <li><Link className='hover:text-sky-500 p-1 px-2 transition-all' to={'/'}>Home</Link></li> */}
            <li><Link className='hover:text-sky-500 p-1 px-2 transition-all' to={'/'}>Shop</Link></li>
        </ul>
        <span className=' cursor-pointer hover:bg-slate-600 py-1 transition-all rounded-lg '><Link className=' py-1 px-4' to={'/cart'}><FontAwesomeIcon icon={faShoppingCart} /> {cartItems?.length >= 1 && "(" + cartItems?.length +")"} </Link></span>
        </div>
    </div>
}