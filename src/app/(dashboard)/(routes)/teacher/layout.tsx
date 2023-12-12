import { isTeacher } from '@/lib/teacher';
import { auth } from '@clerk/nextjs';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React from 'react';

export const metadata: Metadata = {
  title: 'Courses | UpSkill',
  description: 'A learning management platform',
};

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!isTeacher(userId)) {
    return redirect('/');
  }

  return children;
};

export default TeacherLayout;
