import { createSlice } from "@reduxjs/toolkit";
import { OFFESET_LIVE_CHAT } from "./constants";


const chatSlice = createSlice({
    name:"chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(OFFESET_LIVE_CHAT, 1);
            state.messages.unshift(action.payload); //push
        }
    }
})


export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;