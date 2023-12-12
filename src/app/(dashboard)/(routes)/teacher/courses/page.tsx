import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Payment, columns } from './_components/Columns';
import { DataTable } from './_components/DataTable';

async function getData(): Promise<Payment[]> {
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
  ];
}

const CoursesPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className='p-6'>
      <DataTable columns={columns} data={courses} />
      {/* <Link href='/teacher/create'>
        <Button>New Course</Button>
      </Link> */}
    </div>
  );
};
export default CoursesPage;
