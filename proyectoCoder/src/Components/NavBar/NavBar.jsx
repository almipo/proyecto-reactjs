
import{CartWidget} from "../CartWidget/CartWidget"
import '../../tailwind.css';



export const NavBar = () => {
  return (
    <>
    <div className= "grid grid-rows-1 grid-flow-col gap-3 bg-slate-600 " >
      <div className="box-content h-45 w-45" > <img src="../../../public/img/logo.jpg" alt="imagen del logo del ecommerce" /></div>
      <div className="inline-block align-middle">
        <button className="rounded-full bg-orange-400  text-white m-5 p-2">opcion 1</button>
        <button className="rounded-full bg-orange-400 text-white m-5 p-2">opcion 2</button>
        <button className="rounded-full bg-orange-400 text-white m-5 p-2">opcion 3</button>
      </div>
      <div className="absolute top-5 right-0 h-16 w-16 inline-block align-middle"><CartWidget/></div>
    </div>

    </>
  );
};
