'use client';
import { ModuleLayout } from '@/components/layout/ModuleLayout';
import chapters from '@/content/js-basics/index.json';

export default function JsBasicsPage() {
  return (
    <ModuleLayout
      title='JavaScript Temelleri'
      chapters={chapters.chapters}
      basePath='/js-basics'
    />
  );
}
