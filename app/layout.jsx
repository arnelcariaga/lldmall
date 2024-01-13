import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./global.scss";
import { Inter } from "next/font/google";
import MySessionProvider from "./MySessionProvider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>
        <MySessionProvider>
          {children}
        </MySessionProvider>
      </body>
    </html>
  );
}
