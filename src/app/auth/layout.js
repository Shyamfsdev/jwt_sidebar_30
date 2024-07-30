"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function AuthLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('Tokensss');

    if (token) {
      router.push('/');
    }
  }, [router]);

  return (

      <div className={inter.className}>
        {Cookies.get('Tokensss') ? null : children}
      </div>
    
  );
}
