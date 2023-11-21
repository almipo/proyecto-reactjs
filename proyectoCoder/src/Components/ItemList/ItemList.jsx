import { Item } from "../Item/Item" 
import '../../tailwind.css';


export const ItemList = ({products}) => {
  return (
    <>
    <div className="grid grid-flow-row grid-cols-6 gap-2 m-5 align-center" >

        {products.map(product => <Item key={product.id} {...product}  />)}
    </div>

    </>
  )
}