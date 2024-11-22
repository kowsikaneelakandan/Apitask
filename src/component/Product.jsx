import {  useContext, useEffect } from "react";
import  ProductContext from "../context/Productcontext";
import './Product.css';

export default function product(){
    const {selectData,setSelectData,product,setproduct,cartitem,setCartItem}=useContext(ProductContext)
     
    useEffect(()=>{
        fetch("https://mocki.io/v1/cae4bf6d-87d1-4e4f-acd9-1ac27fdeb0ec")
        .then((response)=>response.json())
        .then((result)=>{
            setproduct(result.products)
        }) 
    },[])

    function addcart(Item){
        console.log(Item)
         setCartItem((prevSelectData)=>[...prevSelectData,Item])
        setSelectData((prevSelectData)=>[...prevSelectData,Item]);
    
    
    }

    function removecart(id){   
    
        setSelectData(()=>{
            return selectData.filter((item)=>item.id !==id);
        })

    }
        
    return(
        <div className="container">
            <div className="row">
                {
                    product.map((Product,index)=>{
                        return(
                            <div className="card col-4" key={`${Product}-${index}`}>
                            <img src={Product.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">{Product.title}</h5>
                              <p className="card-text">{Product.description}</p>
                              <p className="card-price">${Product.price}</p>
                              <p className="card-text">Rating:{Product.rating.rate}/5</p>
                              <button className="btn btn-primary" onClick={()=>addcart(Product)}>Add to Cart</button>
                              <button className="btnRemove" onClick={()=>removecart(Product.id)}>Remove from cart</button>
                        
                            </div>
                          </div>
                        )
                    })
                }
            </div>

        </div>
    )
}