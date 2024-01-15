"use client";
import { useEffect } from "react";
import { persistor } from "@/app/Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector } from "react-redux";

export default function MyPersistGate({ children }) {
  const darkMode = useSelector((s) => s.settings.darkMode);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", darkMode);
  }, [darkMode]);

  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}
