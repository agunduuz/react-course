import { getMdxContent } from '@/lib/mdx';
import { CourseLayout } from '@/components/layout/CourseLayout';

export default async function ChapterPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = await getMdxContent('js-basics', params.slug);

  if (!content) {
    return <div>Error: Content not found</div>;
  }

  return (
    <CourseLayout
      content={content}
      backLink='/js-basics'
      backText='JavaScript Temelleri'
    />
  );
}
