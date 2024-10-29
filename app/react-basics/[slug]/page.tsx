import { getMdxContent } from '@/lib/mdx';
import { CourseLayout } from '@/components/layout/CourseLayout';

export default async function ChapterPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = await getMdxContent('react-basics', params.slug);

  if (!content) {
    return <div>Error: Content not found</div>;
  }

  return (
    <CourseLayout
      content={content}
      backLink='/react-basics'
      backText='React Temelleri'
    />
  );
}
