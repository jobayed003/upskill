import { auth } from '@clerk/nextjs';
import { CheckCircle, Clock } from 'lucide-react';
import { redirect } from 'next/navigation';
import { getDashboardCourses } from '../../../../../actions/getDashboardCourses';
import { InfoCard } from './_components/InfoCard';
import { CourseList } from '@/components/CourseList';

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const { completedCourses, coursesInProgress } = await getDashboardCourses(
    userId
  );

  return (
    <div className='p-6 space-y-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <InfoCard
          icon={Clock}
          label='In Progress'
          numberOfItems={coursesInProgress.length}
        />
        <InfoCard
          icon={CheckCircle}
          label='Completed'
          numberOfItems={completedCourses.length}
          variant='success'
        />
      </div>
      <CourseList items={[...coursesInProgress, ...completedCourses]} />
    </div>
  );
}
