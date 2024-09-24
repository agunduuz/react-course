'use client';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { FlipWords } from '@/components/ui/flip-words';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'React 1',
    description: 'İçerik açıklaması buraya gelecek.',
    link: '/module-1',
  },
  // {
  //   title: 'React 2',
  //   description: 'İçerik açıklaması buraya gelecek.',
  //   link: '/module-2',
  // },
  // {
  //   title: 'Word Project',
  //   description: 'İçerik açıklaması buraya gelecek.',
  //   link: '/word-project',
  // },
  // {
  //   title: 'React 3',
  //   description: 'İçerik açıklaması buraya gelecek.',
  //   link: '/module-3',
  // },
  // {
  //   title: 'React 4',
  //   description: 'İçerik açıklaması buraya gelecek.',
  //   link: '/module-4',
  // },
  // {
  //   title: 'Toast Component',
  //   description: 'İçerik açıklaması buraya gelecek.',
  //   link: '/toast-component',
  // },
  // {
  //   title: 'React 5',
  //   description: 'İçerik açıklaması buraya gelecek.',
  //   link: '/module-5',
  // },
  // {
  //   title: 'React 6',
  //   description: 'İçerik açıklaması buraya gelecek.',
  //   link: '/module-6',
  // },
  // {
  //   title: 'Bonus React',
  //   description: 'İçerik açıklaması buraya gelecek.',
  //   link: '/bonus-module',
  // },
  // {
  //   title: 'MDX Project',
  //   description: 'İçerik açıklaması buraya gelecek.',
  //   link: '/mdx-project',
  // },
  // {
  //   title: 'Bonus React 2',
  //   description: 'İçerik açıklaması buraya gelecek.',
  //   link: '/bonus-module-2',
  // },
  // {
  //   title: 'Reference',
  //   description: 'İçerik açıklaması buraya gelecek.',
  //   link: '/reference',
  // },
  // {
  //   title: 'Reference 2',
  //   description: 'İçerik açıklaması buraya gelecek.',
  //   link: '/reference-2',
  // },
];

export default function Home() {
  const words = [
    'JavaScript',
    'React',
    'Tools',
    'Projects',
    'NextJS',
  ];
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='relative flex flex-col gap-4 items-center justify-center px-4'
      >
        <div className='h-[100%] flex items-center px-4 flex-col'>
          <div className='text-4xl mx-auto font-normal text-[#f1f1f1] md:mt-0 mt-4'>
            <FlipWords words={words} />
          </div>
          <HoverEffect items={projects} />
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
