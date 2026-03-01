import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Noted | Crypto Wallet & Transaction Tracker",
  description:
    "Noted is a modern crypto wallet for securely sending, receiving, and tracking cryptocurrencies in real-time.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${plusJakarta.className} antialiased bg-[#121212] text-slate-100 min-h-screen selection:bg-primary selection:text-white`}>
        {children}
        <Toaster
          position="bottom-right"
          reverseOrder={false}

          toastOptions={{ duration: 4000 }}
        />
      </body>
    </html>
  );
}
