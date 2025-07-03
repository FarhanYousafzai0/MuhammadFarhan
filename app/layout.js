import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";



const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata = {
  title: "Muhammad Farhan",
  description: "Let's Build Something.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className="antialiased bg-yellow-100 overflow-x-hidden" >
     <Nav/>
    


        {children}
      </body>
    </html>
  );
}
