import { useDispatch, useSelector } from "react-redux";
import {add} from "../store/modules/cart"

function Cart(){
    const dispatch = useDispatch()

    const onCreate = text => dispatch(add(text))

    const name = useSelector((state) =>state.cart.name)

    return(
        <div>
            <h1>Cart</h1>
            <h4>{name}</h4>

            <button onClick={()=>onCreate()} > + </button>
        </div>
    )
}

export default Cart