import "./globals.css";
import Navbar from "./navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center">
        {children}
      </body>
    </html>
  );
}
