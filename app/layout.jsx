import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./global.scss";
import { Inter } from "next/font/google";
import MySessionProvider from '@/app/MySessionProvider';
import MyReduxProvider from '@/app/MyReduxProvider';
import MyPersistGate from '@/app/MyPersistGate';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <MyReduxProvider>
      <html lang="en">
        <body className={inter.className}>
          <MySessionProvider>
            <MyPersistGate>
              {children}
            </MyPersistGate>
          </MySessionProvider>
        </body>
      </html>
    </MyReduxProvider>
  );
}
