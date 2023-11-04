import { GiShoppingCart} from "react-icons/gi";
import '../../../src/tailwind.css'

export const CartWidget = () => {
  return (
    <>
    <div className="flex" >
      <GiShoppingCart size={40} color="white" />
      <p className="text-orange-500">1</p>

    </div>
    </>
  )
}
