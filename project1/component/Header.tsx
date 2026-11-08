"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {cn} from '@/lib/utils';
function Header() {
  const pathname = usePathname();
  return (
    <header>
      <div className="main-container inner">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="CoinPlus Logo"
            width={160}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <nav>
          <Link
            href="/"
            className={cn('nav-link', {
              'is-active': pathname === '/',
              'is-home': true,
            })}
          >
            Home
          </Link>
          <Link
            href="/coins"
            className={cn('nav-link', {
              'is-active': pathname === '/coins',
            })}
          >
            All Coins
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
