import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
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
});

export const persistor = persistStore(store);
