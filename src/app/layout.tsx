import React, { ReactNode } from 'react';
import Header from '@/components/header/header';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Software Engineer Portfolio",
  description: "Hello! I'm Haikal, a software engineer.",
  keywords: "Muhammad Haikal, software engineer, online portfolio",
  authors: [{ name: "wsomad" }],
  robots: "index, follow",
  icons: {
    icon: `/images/available-face.png`
  },
  other: {
    "google-site-verification": "dRZ0b2OXM3OA-M1RNZPld9UKmwRu50CBV6qELq1l2d0",
  },
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
