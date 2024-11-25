import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/Productcontext";
import "./Cart.css";

export default function Cart() {
  const { cartItem, setCartItem } = useContext(ProductContext);
  const [ ProductTotal, setProductTotal] = useState("")
  useEffect(() => {

    let data = [...cartItem];
    // console.log("cartItem: ", data);

    let total = 0; 
    data.forEach((product) => {
      product.totalPrice = product.price * product.quantity
      total = total + (product.price * product.quantity)
    })

    // console.log(total, "=> total")

    setCartItem(data);
    setProductTotal(total);

  }, []);

  return (
    <div className="C-container">

      <div>
        <>
        {cartItem.length > 0 ? (
          cartItem.map((product,index) => {
            return (
              <div>
                <div className=" col-12" key={`${product}-${index}`}>
                  <div className="table-layout">
                    <img src={product.image} className="img-cart" />
                    <p className="p-name"> {product.title} </p>
                    <p className="p-name"> Qty. {product.quantity}</p>
                    <p className="p-name">${product.totalPrice}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <center>
            <h3> No items in the cart </h3>
          </center>
        )}
        </>

        <div className="total-div">
          <p> Total:  {ProductTotal} </p>
        </div>
        

        
      </div>
    </div>
  );
}
