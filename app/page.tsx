'use client';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { FlipWords } from '@/components/ui/flip-words';
import { motion } from 'framer-motion';
import moduleData from '@/content/index.json';

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
          <HoverEffect items={moduleData.modules} />
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
