
import{CartWidget} from "../CartWidget/CartWidget";
import{Link} from "react-router-dom";
import '../../tailwind.css';



export const NavBar = () => {
  return (
    <>
    <div className= "grid grid-rows-1 grid-flow-col gap-3 bg-slate-600 " >
      <Link to="/">
      <div className="box-content h-45 w-45" > <img src="../../../public/img/logo.jpg" alt="imagen del logo del ecommerce" /></div>
      </Link>

      <div className="inline-block align-middle">
      <Link to="/category/Almacenamiento">
        <button className="rounded-full bg-orange-400  text-white m-5 p-2">Almacenamiento</button>
      </Link>

      <Link to="/category/Perifericos">
        <button className="rounded-full bg-orange-400 text-white m-5 p-2">Perifericos</button>
      </Link>

      <Link to="/category/Monitores">
        <button className="rounded-full bg-orange-400 text-white m-5 p-2">Monitores</button>
      </Link>

      <Link to="/category/CPU">
        <button className="rounded-full bg-orange-400 text-white m-5 p-2">CPU</button>
      </Link>
      </div>

      <Link to="/cart">
      <div className="absolute top-5 right-0 h-16 w-16 inline-block align-middle"><CartWidget/></div>
      </Link>
    </div>

    </>
  );
};
