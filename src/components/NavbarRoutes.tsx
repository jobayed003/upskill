'use client';

import { UserButton } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from './ui/button';

export const NavbarRoutes = () => {
   const pathname = usePathname();
   const router = useRouter();

   const isTeachePage = pathname?.startsWith('/teacher');
   const isPlayerPage = pathname?.includes('/chapter');

   return (
      <div className='flex gap-x-2 ml-auto'>
         {isTeachePage || isPlayerPage ? (
            <Link href={'/'}>
               <Button size='sm' variant={'ghost'}>
                  <LogOut className='h-4 w-4 mr-2' />
                  Exit
               </Button>
            </Link>
         ) : (
            <Link href={'/teacher/courses'} prefetch>
               <Button size='sm' variant={'ghost'}>
                  Teacher mode
               </Button>
            </Link>
         )}
         <UserButton afterSignOutUrl='/' />
      </div>
   );
};
