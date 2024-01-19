import { getAllPostById } from '@/app/lib/api';
import EditFrom from '@/app/ui/editFrom';
export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;

  const post = await getAllPostById({ id });
  return <EditFrom post={post} />;
}
