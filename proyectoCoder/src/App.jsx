
import  {NavBar}  from "./components/Navbar/Navbar";
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"
import'../src/tailwind.css'

function App() {
  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="BIENVENIDOS AL ECOMMERCE" />
    </>


  )
}

export default App;
