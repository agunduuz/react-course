'use client';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Chapter {
  id: string;
  slug: string;
  title: string;
  description: string;
}

interface ModuleLayoutProps {
  title: string;
  chapters: Chapter[];
  basePath: string;
}

export function ModuleLayout({
  title,
  chapters,
  basePath,
}: ModuleLayoutProps) {
  return (
    <AuroraBackground>
      <motion.div className='z-10 inset-0'>
        <div className='h-full md:w-[768px] sm:w-full px-2 py-4 min-h-screen'>
          <div className='flex items-center justify-between'>
            <h1 className='text-[#f1f1f1] mt-4 text-xl font-semibold text-center'>
              {title}
            </h1>
            <Link
              href='/'
              className='mt-4 py-1 px-2 text-[#f1f1f1] rounded bg-[#333] transition-colors duration-300 text-sm'
            >
              Ana Sayfaya Dön
            </Link>
          </div>
          <ul className='flex items-center flex-col'>
            {chapters.map((chapter) => (
              <li key={chapter.id} className='w-full mt-4'>
                <Link
                  href={`${basePath}/${chapter.slug}`}
                  className='group flex items-start flex-col py-6 px-4 bg-[#00000083] rounded-lg border border-[#333] hover:border-[#82CD47]'
                >
                  <h3 className='text-[#888] text-l font-semibold group-hover:text-[#f1f1f1]'>
                    {chapter.title}
                  </h3>
                  <p className='text-[#666] my-2'>
                    {chapter.description}
                  </p>
                  <span className='bg-[#82CD47] py-0.5 px-4 text-sm rounded text-[#000] group-hover:bg-[#666] transition-colors duration-300'>
                    Detay
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
