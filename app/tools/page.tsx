'use client';
import { ModuleLayout } from '@/components/layout/ModuleLayout';
import chapters from '@/content/tools/index.json';

export default function ToolsPage() {
  return (
    <ModuleLayout
      title='Kullanım Araçları'
      chapters={chapters.chapters}
      basePath='/tools'
    />
  );
}
