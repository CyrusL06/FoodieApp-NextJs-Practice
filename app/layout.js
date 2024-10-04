//Layouts job is to act as a wrapper for the App
//and you can also have nested layout
//this layout is visible for every single page in the web

import "./globals.css";
import MainHeader from "@/component/mainHeader/main-header";
//MetaDATA
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Turned it into component */}
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
