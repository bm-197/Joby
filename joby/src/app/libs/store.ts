import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { akillApi } from "./api";

export const store = configureStore({
   reducer: {
    [akillApi.reducerPath]: akillApi.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(akillApi.middleware)
})

setupListeners(store.dispatch)