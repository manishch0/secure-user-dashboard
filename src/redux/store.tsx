import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import dataReducer from "./data";

const store = configureStore({
  reducer: {
    auth: authReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
