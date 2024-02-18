import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./slices/couterSlices";


export const store = configureStore({
    reducer: {
        counter:CounterSlice.reducer
    },
})