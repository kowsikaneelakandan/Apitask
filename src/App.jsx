import { Routes,Route } from "react-router-dom";
import Home from "./component/Home";
import product from "./component/Product";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";



function App(){
 
  return (
    <>  
    <Navbar />
    <Routes>
      <Route Component={Home} path="/"/>
      <Route Component={product} path="/product"/>
      <Route Component={Cart} path="/cart"/>
      </Routes>                                                                                                  
    </>
  )
}


export default App
