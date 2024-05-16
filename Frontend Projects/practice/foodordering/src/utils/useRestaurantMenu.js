import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./contants";

const useRestaurantMenu = (id) => {
  const [restMenu, setRestMenu] = useState(null);

  const fetchMenu = async () => {
    try {
      const response = await fetch(RESTAURANT_MENU_API + id);
      const json = await response.json();
      setRestMenu(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);


  return restMenu
};

export default useRestaurantMenu;

