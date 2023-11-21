


export const ItemDetail = ({ descripcion, img, price, stock, name}) => {
 
 
  return (
    
    <div className="border-2 border-slate-600 rounded-lg m-5 between ">
      
        <div className="grid grid-cols-2 gap-0 grid rows-3 justify-items-center ">
          <div>
          <h5 className="place-items-center m-2 text-center">{name}</h5>
          <img src={img} alt="" className="m-10 "/>

          </div>
          <div className="">
          <p className="text-justify mt-20 inline-block align-baseline p-2 "> {descripcion} </p>
          <p className="mt-5">Stock:{stock}</p>
          <p className="">Precio: {price} </p>
          </div>
           </div>
      
    </div>
    
  );
};