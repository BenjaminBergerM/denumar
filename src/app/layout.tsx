import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denu Mar",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`antialiased h-screen bg-zinc-950 font-helvetica`}
      >
        {children}
      </body>
    </html>
  );
}
