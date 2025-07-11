import { Inter_Tight } from "next/font/google";
import "./globals.css";




const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata = {
  title: "Muhammad Farhan",
  description: "Let's Build Something.",
  icons: {
    icon: "/33.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className="antialiased overflow-x-hidden " >
  
    


        {children}
      </body>
    </html>
  );
}