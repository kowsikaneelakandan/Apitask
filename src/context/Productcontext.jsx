import{createContext, useState} from "react";

const ProductContext=createContext();

export  function ProductContextProvider({children}){
    const[cartItem, setCartItem]=useState([]);



       
    return<ProductContext.Provider value={
        {cartItem, setCartItem}
    } >
        {children}
        </ProductContext.Provider>;
    }
    export default ProductContext
     
     
     
     
    