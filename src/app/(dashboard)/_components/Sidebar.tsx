'use client';
import { useRouter } from 'next/navigation';
import { Logo } from './Logo';
import { SidebarRoutes } from './SidebarRoutes';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm'>
      <div className='p-6 cursor-pointer' onClick={() => router.push('/')}>
        <Logo />
      </div>
      <div>
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
