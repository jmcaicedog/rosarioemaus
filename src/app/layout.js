import "./globals.css";
import Header from "@/components/Header";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Emaus Cristo Rey Cali - Santo Rosario",
  description: "Santo Rosario",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            minHeight: "100vh",
            background: "#fff",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
