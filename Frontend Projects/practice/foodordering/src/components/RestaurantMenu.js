import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useContext } from "react";
import UserContext from "../utils/userContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {

  const dispatch = useDispatch();

  const handleAddItem = (el) => {
    //dispatch an action
    dispatch(addItem(el))
  }

  const {loggedInUser} = useContext(UserContext)
  const { id } = useParams();
  const restMenu = useRestaurantMenu(id);
  if (restMenu === null) {
    return <h1>Loaidng...</h1>;
  }

  const { name, cuisines, costForTwoMessage } =
    restMenu?.cards[2]?.card?.card?.info || {};

  // const { itemCards } =
  //   restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card ||
  //   restMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card ||
  //   {};
//   console.log(itemCards);


  const categories = restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((el) => (
    el.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ));
  // console.log(categories);

  

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3 className="mb-4">{costForTwoMessage}</h3>
      {categories === null ? (
        <h1>Loaidng...</h1>
      ) : (
        categories.map((el) => {
          return (
            <h1 key={el.card.card.id} className="font-bold">
              {el.card.card.title}
              <p>{loggedInUser}</p>
              {el.card.card.itemCards.map((el) => {
                return (
                  <div>
                    <h4 className="text-green-800">{el.card.info.name}</h4>
                    <button className="bg-yellow-200" onClick={() => handleAddItem(el)}>Add to cart</button>
                  </div>
                )
              })}
            </h1>
          );
        })
      )}
    </div>
  );
};

export default RestaurantMenu;
