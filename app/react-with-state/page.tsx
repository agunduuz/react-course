'use client';
import { ModuleLayout } from '@/components/layout/ModuleLayout';
import chapters from '@/content/react-with-state/index.json';

export default function ReactWithStatePage() {
  return (
    <ModuleLayout
      title="React'te State Yönetimi"
      chapters={chapters.chapters}
      basePath='/react-with-state'
    />
  );
}
