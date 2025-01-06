import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strip Js payment gateway",
  description: "Polishing up the knowledge in stripe js with next js integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
