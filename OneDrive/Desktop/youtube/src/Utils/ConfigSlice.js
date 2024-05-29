import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice=createSlice({
    name:"config",
    initialState:{
        isHandburgerOpen:true,
        isSearchSuggestions:true,
    },
    reducers:{
        toggleHandBurger:(state)=>{
            state.isHandburgerOpen=!state.isHandburgerOpen;
        },
        togglesuggestions:(state)=>{
            state.isSearchSuggestions=!state.isSearchSuggestions;
        },
    }
});

export const {toggleHandBurger,togglesuggestions,setButtonOpen}=ConfigSlice.actions;
export default ConfigSlice.reducer;