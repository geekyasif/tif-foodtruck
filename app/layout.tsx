import "./globals.css"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Truck",
  description: "Discover the Best Food and Drinks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html >
      <body>{children}</body>
    </html>
  );
}
