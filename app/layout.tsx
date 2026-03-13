import type { Metadata } from "next";
import { PHProvider } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eloquens® AI — Your Inbox. Handled.",
  description:
    "Stop wasting your best hours on email. Eloquens® AI reads, replies, and routes — in your voice, at infinite scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PHProvider>{children}</PHProvider>
      </body>
    </html>
  );
}
