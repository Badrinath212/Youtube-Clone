import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./DataSlice";
import ConfigReducer from "./ConfigSlice";

const AppStore=configureStore({
    reducer:{
        data:DataReducer,
        config:ConfigReducer,
    }
});

export default AppStore;