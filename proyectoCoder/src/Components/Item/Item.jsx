
import { Link } from "react-router-dom";
import '../../tailwind.css';

export const Item = ({id, name, img}) => {
  return (
    <>
      <div className="border-2 border-slate-600 rounded-lg w-52 ">
        <div className="grid grid-cols-1  place-items-center " >
          <img src={img} alt="" className="m-2" />
          <h5 className="  p-2 text-center" >{name}</h5>
        

          <Link to={`/item/${id}`}>
          <button className="rounded-full bg-orange-400 text-white mb-2 p-2  ">Detalles</button>
          </Link>
        
        
          
        </div>
      </div>
    
    </>
  );
};