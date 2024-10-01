import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const CustomButton = dynamic(
  () => import('@/components/CustomButton'),
  { ssr: false }
);

const components = { CustomButton };

async function getMdxContent(slug: string) {
  const filePath = path.join(
    process.cwd(),
    `app/js-temelleri/${slug}.mdx`
  );
  try {
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    return fileContent;
  } catch (error) {
    console.error(`Error reading MDX file: ${error}`);
    return null;
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const mdxContent = await getMdxContent(slug);

  if (!mdxContent) {
    return <div>Error: Content not found</div>;
  }

  return (
    <article className='bg-[#111] h-full flex flex-col items-center'>
      <div className='md:w-[1024px] sm:w-full w-full h-full bg-[#161616] text-[#f1f1f1] md:px-20 px-2 py-5 mdx-content'>
        <div className='flex items-center justify-between'>
          <Link
            href='/js-temelleri'
            className='py-1 px-2 text-[#333] rounded bg-[#82CD47] transition-colors duration-300 text-sm'
          >
            Bir Önceki Sayfa
          </Link>
          <Link
            href='/'
            className='py-1 px-2 text-[#f1f1f1] rounded bg-[#333] transition-colors duration-300 text-sm'
          >
            Ana Sayfaya Dön
          </Link>
        </div>
        <MDXRemote source={mdxContent} components={components} />
      </div>
    </article>
  );
}
