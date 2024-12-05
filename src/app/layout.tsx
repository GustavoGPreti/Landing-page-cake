import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Caseirinhos da Lê",
  description: "Descubra os mais deliciosos bolos artesanais feitos com amor e dedicação. Sabores únicos, texturas irresistíveis e decorações encantadoras para tornar seus momentos ainda mais especiais. Encomende já!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Providers>{children}</Providers>
      </body>
    </html>
  );
}
