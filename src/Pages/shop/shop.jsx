import { PRODUCTS } from "../../data/products";
import { Product } from "./product";

export const Shop = () =>{

    
    return <div>
        <div className="products max-w-[90%] flex gap-5 justify-center flex-wrap mx-auto mt-10 transition-all">
            {PRODUCTS.map(item => <Product key={item.id} data={item} />)}
        </div>
    </div>
}