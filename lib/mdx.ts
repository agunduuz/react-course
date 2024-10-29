import fs from 'fs/promises';
import path from 'path';

// Chapter için interface tanımı
interface Chapter {
  id: string;
  slug: string;
  title: string;
  description: string;
}

// JSON yapısı için interface
interface ModuleContent {
  chapters: Chapter[];
}

export async function getMdxContent(module: string, slug: string) {
  try {
    const indexPath = path.join(
      process.cwd(),
      'content',
      module,
      'index.json'
    );
    const indexContent = await fs.readFile(indexPath, 'utf-8');
    const { chapters } = JSON.parse(indexContent) as ModuleContent;

    const chapter = chapters.find((ch: Chapter) => ch.slug === slug);

    if (!chapter) {
      console.error(`No chapter found for slug: ${slug}`);
      return null;
    }

    const fileName = `${chapter.id}-${slug}.mdx`;
    const filePath = path.join(
      process.cwd(),
      'content',
      module,
      fileName
    );

    console.log('Reading file:', filePath);
    const content = await fs.readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error('Error reading MDX file:', error);
    console.log('Requested slug:', slug);
    return null;
  }
}
