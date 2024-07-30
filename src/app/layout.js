"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const token = Cookies.get('Tokensss');
    setIsAuthenticated(!!token);
    setIsLoaded(true);

    if (!token && router.pathname !== '/auth') {
      router.push('/auth');
    } else if (token && router.pathname === '/auth') {
      router.push('/');
    }
  }, [router]);

  if (!isLoaded) {
    return null; // or a loading spinner
  }

  return (
    <html lang="en">
      <head>
        <title>Your App Title</title>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
