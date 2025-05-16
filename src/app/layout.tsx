import React, { ReactNode } from 'react';
import Header from '@/components/header/header';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Muhammad Haikal",
  description: "Hello! I'm Haikal.",
  keywords: "Muhammad Haikal, Software Engineer, Web Developer, Mobile App Developer, Portfolio, Deloitte",
  authors: [{ name: "wsomad" }],
  robots: "index, follow",
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
