import type { Metadata } from "next";
import { epilogue } from "@/app/ui/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Joby",
  description: "A job listing application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.className} ${epilogue.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
