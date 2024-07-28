'use client'; // Add this directive at the top

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface SidebarProps {
  user: {
    name: string;
    email: string;
  };
}

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();
  
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="md-12 cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={43}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = item.route === pathname || pathname.startsWith(`${item.route}/`);
          return (
            <Link href={item.route} key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative size-6">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}

        USER
      </nav>

      FOOTER
    </section>
  );
};

export default Sidebar;
