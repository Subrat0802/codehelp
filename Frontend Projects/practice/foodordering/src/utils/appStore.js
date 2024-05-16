import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
    reducer: {
        cartReducer: cartSlice,
        userReducer: userSlice
    }
});


export default appStore;