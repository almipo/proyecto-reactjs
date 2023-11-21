import { useEffect,useState } from "react";
import { getProductById } from "../../assets/asyncMock";
import { ItemDetail } from "../../Components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  

    useEffect( () => { 
      setIsLoading(true)
        getProductById(id)
        .then((resp )=> {
          setItem(resp)
        
          setIsLoading(false)
        })
        
        .catch(error => console.log(error));
        
      }, [])
    

  return (
    <>
    {isLoading ? <h2> CARGANDO......</h2> : item && <ItemDetail {...item} />}
    </>
  )
}