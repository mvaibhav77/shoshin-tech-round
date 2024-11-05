import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

const roboto = localFont({
  src: "./fonts/RobotoReg.woff",
  variable: "--font-roboto",
  weight: "100 400",
});

export const metadata: Metadata = {
  title: "Shoshin Tech Assignment",
  description: "Simple dashboard for Shoshin Tech Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <div className="app flex">
          {/* sidebar */}
          <Sidebar />

          {/* dashboard */}
          {children}
        </div>
      </body>
    </html>
  );
}
