import Link from 'next/link';

export default function Card({ id, title }: { id: string; title: string }) {
  return (
    <Link href={`/blog/view/${id}`}>
      <div className='rounded-xl bg-blue-100 p-2 shadow-sm'>
        <div className='flex p-4'>
          <h3 className='ml-2 text-sm font-medium'>Blog ID: {id}</h3>
        </div>
        <p className='truncate rounded-xl bg-white px-4 py-8 text-center text-2xl'>
          Title : {title}
        </p>
      </div>
    </Link>
  );
}
