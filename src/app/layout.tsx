import React, { ReactNode } from 'react';
import '@/style/globals.css';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});


interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Muhammad Haikal",
  description: "Hello! I'm Haikal.",
  keywords: "Muhammad Haikal, Software Engineer, Web Developer, Mobile App Developer, Portfolio",
  authors: [{ name: "wsomad" }],
  robots: "index, follow",
  other: {
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
};

export default Layout;
