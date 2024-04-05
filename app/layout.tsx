import Nav from "@/components/Nav/Nav";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forte Shampoo",
  description: "Forte Shampoo Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
            <main>
                <Nav />
                <section>
                    {children}
                </section>
            </main>
        </body>
    </html>
  );
}
