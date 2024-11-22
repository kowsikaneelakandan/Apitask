import { useContext, useEffect } from "react";
import ProductContext from "../context/Productcontext";
import "./Cart.css";

export default function Cart() {
  const { cartitem, setCartItem,Total,setTotal} = useContext(ProductContext);
  console.log(setCartItem)
  useEffect(()=>{
    let price=0;
    cartitem.forEach((element) => {
        price += element.price *element.quantity
    
  });setTotal(price)

  function handlecart(){
    
  }

})
  return (
    <div className="C-container">
      <div className="row">
        {
        cartitem.map((product) => {
          return (
            <div className="card col-4" key={product.id}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <button onClick={handlecart}>-</button>
                <button>+</button>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          );
        })}
        <h3>Total Price:{Total}</h3>
      </div>
    </div>
  );
}
