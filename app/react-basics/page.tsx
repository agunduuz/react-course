'use client';
import { ModuleLayout } from '@/components/layout/ModuleLayout';
import chapters from '@/content/react-basics/index.json';

export default function ReactBasicsPage() {
  return (
    <ModuleLayout
      title='React Temelleri'
      chapters={chapters.chapters}
      basePath='/react-basics'
    />
  );
}
