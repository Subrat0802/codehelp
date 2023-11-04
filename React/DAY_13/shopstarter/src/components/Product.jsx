import { useDispatch, useSelector} from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import {toast} from "react-hot-toast"

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addFromCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart")
  }


  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item removed from cart")
  }

  return (
  <div>
    <div>
      <p>{post.title}</p>
    </div>
    <div>
      <p>{post.description}</p>
    </div>
    <div>
      <img src={post.image}/>
    </div>
    <div>
      <p>{post.price}</p>
    </div>
    <button>
      {
        cart.some((p) => p.id === post.id) ? <button onClick={removeFromCart}>Remove Item</button> : 
        <button onClick={addFromCart}>Add to cart</button>
      }
    </button>
  </div>);
};

export default Product;
