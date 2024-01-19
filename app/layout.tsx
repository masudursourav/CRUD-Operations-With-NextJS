import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from './ui/nav';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simple Blog',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  );
}
