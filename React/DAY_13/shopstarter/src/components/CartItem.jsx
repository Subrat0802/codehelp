import {FcDeleteDatabase} from "react-icons/fc"

const CartItem = ({item, itemIndex}) => {


  const removeFromCart = () => {

  }
  return (
  <div>
    <div>
      <div>
        <img src={item.image} />
      </div>
      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <div>
          <p>{item.price}</p>
          <div onClick={removeFromCart}>
            <FcDeleteDatabase/>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
};

export default CartItem;
