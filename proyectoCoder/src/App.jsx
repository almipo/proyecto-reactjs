
import{BrowserRouter, Routes, Route}from "react-router-dom"
import { CartContextProvider } from "./context/CartContext";
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Components/Cart/Cart";
import Order from "./Components/Order/Order";
import { NavBar}  from "./Components/NavBar/NavBar";
import'../src/tailwind.css'


function App() {
  
  return (
    <>

    <BrowserRouter>
    <CartContextProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/confirmar-compra" element={<Order />} />
      </Routes>
    </CartContextProvider>
    </BrowserRouter>
    </>


  )
}

export default App;
