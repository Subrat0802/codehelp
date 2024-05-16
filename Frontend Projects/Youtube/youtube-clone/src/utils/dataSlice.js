import { createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name:"data",
    initialState:{
        homePageData:[],
    },
    reducers: {
        addFetchedData : (state, action) => {
            state.homePageData = action.payload;
        }
    }
})


export const {addFetchedData} = dataSlice.actions;

export default dataSlice.reducer