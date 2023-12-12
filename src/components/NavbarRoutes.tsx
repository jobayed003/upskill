'use client';

import { isTeacher } from '@/lib/teacher';
import { UserButton, useAuth } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SearchInput } from './SearchInput';
import { Button } from './ui/button';

export const NavbarRoutes = () => {
  const { userId } = useAuth();

  const pathname = usePathname();

  const isTeachePage = pathname?.startsWith('/teacher');
  const isCoursesPage = pathname?.includes('/courses');
  const isSearchPage = pathname?.includes('/search');

  return (
    <>
      {isSearchPage && (
        <div className='hidden md:block'>
          <SearchInput />
        </div>
      )}
      <div className='flex gap-x-2 ml-auto'>
        {isTeachePage || isCoursesPage ? (
          <Link href={'/'}>
            <Button size='sm' variant={'ghost'}>
              <LogOut className='h-4 w-4 mr-2' />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href={'/teacher/courses'} prefetch>
            <Button size='sm' variant={'ghost'}>
              Teacher mode
            </Button>
          </Link>
        ) : (
          ''
        )}
        <UserButton afterSignOutUrl='/' />
      </div>
    </>
  );
};
