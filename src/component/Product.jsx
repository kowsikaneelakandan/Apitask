import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/Productcontext";
import "./Product.css";

export default function product() {
  const [product, setproduct] = useState([]);
  const { cartItem, setCartItem } = useContext(ProductContext);

  useEffect(() => {
    fetch("https://mocki.io/v1/cae4bf6d-87d1-4e4f-acd9-1ac27fdeb0ec")
      .then((response) => response.json())
      .then((result) => {
        if (result.products) {
          result.products.forEach((element) => {
            element.quantity = 1;
          });
        }
        // console.log(result.products, " => products");
        setproduct(result.products);
      });
  }, []);

  function addcart(Item) {
    setCartItem((prevcartItem) => [...prevcartItem, Item]);
  }

  function removecart(id) {
    setCartItem(() => {
      return cartItem.filter((item) => item.id !== id);
    });
  }

  const addQuantity = (details, index) => {
    

    let productDetails = {...details}  
    let productState = [...product]  

    productDetails.quantity += 1;
    productState[index] = productDetails;

    setproduct(productState);
  };

  const removeQuantity = (details, index) => {
    

    let productDetails = {...details}  
    let productState = [...product]  

    if(productDetails.quantity === 1) {
        alert("Minimum order quntity should be 1");

    } else {
        productDetails.quantity -= 1;
        productState[index] = productDetails;
    
        setproduct(productState);
    }


  };

  return (
    <div className="container">
      <div className="row">
        {product.map((Product, index) => {
          return (
            <div className="card col-4" key={`${Product}-${index}`}>
              <img
                src={Product.image}
                className="card-img-top"
                alt="product-image"
              />
              <div className="card-body">
                <h5 className="card-title">{Product.title}</h5>
                <p className="card-text">{Product.description}</p>
                <div className="d-flex align-items-center justify-space-between">
                  <span className="card-price">${Product.price}</span>
                  &nbsp;&nbsp;
                  <span className="card-text">
                    {`(Rating: ${Product.rating.rate})`}
                  </span>
                </div>
                <br></br>
                <br></br>
                <div className="quantity-field">
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => addQuantity(Product, index)}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <input
                    className="cField"
                    type="text"
                    value={Product.quantity}
                    disabled
                  />
                  <button className="btn btn-sm btn-danger" onClick={() => removeQuantity(Product, index)}> - </button>
                </div>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addcart(Product)}
                >
                  Add to Cart
                </button>
                &nbsp;&nbsp;
                <button
                  className="btnRemove btn-sm"
                  onClick={() => removecart(Product.id)}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
