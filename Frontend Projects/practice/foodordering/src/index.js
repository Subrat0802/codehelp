import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
// import Grocery from './components/Grocery';
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
import {Provider, useDispatch} from "react-redux"
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./utils/firebase";
// import { addUser, removeUser } from "./utils/userSlice";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    //make an api call send the data
    const data = {
      name: "Subrat Mishra",
    };
    setUserInfo(data.name);
  }, []);




  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/login",
    element:<Login />
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restMenu/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
