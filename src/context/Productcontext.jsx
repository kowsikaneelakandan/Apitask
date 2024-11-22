import{createContext, useState} from "react";

const ProductContext=createContext();

export  function ProductContextProvider({children}){
    const[selectData,setSelectData]=useState([]);
    const[product,setproduct]=useState([]);
    const[cartitem,setCartItem]=useState([]);
    const[Total,setTotal]=useState(0)


       
    return<ProductContext.Provider value={
        {selectData,setSelectData,product,setproduct,cartitem,setCartItem,Total,setTotal}
    } >
        {children}
        </ProductContext.Provider>;
    }
    export default ProductContext
     
     
     
     
    