import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "../libs/myStorage";
import settingsSlice from "./Slices/settingsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  settings: persistReducer(persistConfig, settingsSlice),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
