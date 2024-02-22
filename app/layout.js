import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import MetaText from "@/components/ui/MetaText";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Africa Union Technology",
    template: "%s || Africa Union Technology",
  },
  icons: {
    icon: "/favicon.png", // /public path
  },

  description: "Scope Technology || Define your own Path to Mobile Solutions!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <MetaText metadata={metadata} /> */}
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen" metadata={metadata}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
