
import  {NavBar}  from "./components/Navbar/Navbar";
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Components/Cart/Cart";
import{BrowserRouter, Routes, Route}from "react-router-dom"
import'../src/tailwind.css'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>


  )
}

export default App;
