"use client";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

export default function MyReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
