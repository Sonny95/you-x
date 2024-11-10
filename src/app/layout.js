import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "YouX",
  description: "Asset Finance Specialists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
