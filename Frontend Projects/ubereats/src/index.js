import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import Help from "./components/Help";
import Offers from "./components/Offers";
import Cart from "./components/Cart";
import Signin from "./components/Signin";
import Home from "./pages/Home";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/reduxStore/appStore";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Subrat",
    };
    setUserName(data.name);
  }, []);

  const [locationSideBar, setLocationSideBar] = useState(false)

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName, locationSideBar, setLocationSideBar }}>
        <div className="font-inter bg-[#0F0F0F]">
          <Header />
          <ScrollRestoration />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restauratmenu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
