import { createSlice } from "@reduxjs/toolkit";

const DataSlice=createSlice({
    name:"data",
    initialState:{
        mostpopulardata:null,
        searchSuggestionsData:null,
        searchQuery:"",
        searchData:null,
        commentsData:null,
    },
    reducers:{
        AddData:(state,action)=>{
            state.mostpopulardata=action.payload;
        },
        AddSearchData:(state,action)=>{
            state.searchSuggestionsData=action.payload;
        },
        AddSearchQuery:(state,action)=>{
            state.searchQuery=action.payload;
        },
        AddSearchedData:(state,action)=>{
            state.searchData=action.payload;
        },
        RemoveSearchedData:(state)=>{
            state.searchData=null;
        },
        AddCommentsData:(state,action)=>{
            state.commentsData=action.payload;
        },
        RemoveSearchQuery:(state)=>{
            state.searchQuery="";
        }
    }
});

export const {AddData,AddSearchData,AddSearchQuery,AddSearchedData,RemoveSearchedData,AddCommentsData,RemoveSearchQuery}=DataSlice.actions;
export default DataSlice.reducer;