"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Inter } from 'next/font/google';
import '../globals.css';
import MiniDrawer from './Sidebar/page';

const inter = Inter({ subsets: ['latin'] });

export default function HomeLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('Tokensss');

    if (!token) {
      router.push('/auth');
    }
  }, [router]);

  return (
 
      
      <div className={inter.className}>
        {Cookies.get('Tokensss') ? <MiniDrawer>{children}</MiniDrawer> : null}
      </div>
    
  );
}
