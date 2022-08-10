import { configureStore } from "@reduxjs/toolkit";
import { servicesApi } from "../Service/apiService";
export const store = configureStore({
  reducer: {
    [servicesApi.reducerPath]: servicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(servicesApi.middleware),
});
