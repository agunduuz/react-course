'use client';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Module1Page() {
  const blogPosts = [
    {
      id: '1',
      title: 'React ile "Merhaba Dünya"',
      description:
        "React'e giriş yapın: Basit bir 'Merhaba Dünya' uygulaması oluşturarak React'in temel kavramlarını, DOM manipülasyonunu ve render işlemini öğrenin.",
      href: '/module-1/merhaba-dunya',
    },
    {
      id: '2',
      title: 'JSX Anlamaya Giriş',
      description:
        "JSX'in ne olduğunu, neden kullanıldığını ve JavaScript'e nasıl derlendiğini öğrenin. React elemanlarını oluşturmanın kolay yolunu keşfedin.",
      href: '/module-1/jsx-anlamak-giris',
    },
    {
      id: '3',
      title: 'İfade Slotları',
      description:
        'JSX içinde ifade slotlarını kullanmayı öğrenin. Dinamik değerler, öznitelikler ve yorumlar için süslü parantezlerin gücünü keşfedin.',
      href: '/module-1/ifade-slotlari',
    },
    {
      id: '4',
      title: 'HTML Farklılıkları',
      description:
        'JSX ve HTML arasındaki temel farklılıkları öğrenin: rezerve kelimeler, kendiliğinden kapanan etiketler, büyük-küçük harf duyarlılığı ve satır içi stillerin kullanımı.',
      href: '/module-1/react-ile-html-farkliliklari',
    },
  ];

  return (
    <AuroraBackground>
      <motion.div className='z-10 inset-0'>
        <div className='h-lvh md:w-[768px] sm:w-full px-2'>
          <div className='flex items-center justify-between'>
            <h1 className='text-[#f1f1f1] mt-4 text-xl	font-semibold	text-center'>
              React 1
            </h1>
            <Link
              href='/'
              className='mt-4 py-1 px-2 text-[#f1f1f1] rounded bg-[#333] transition-colors duration-300 text-sm'
            >
              Ana Sayfaya Dön
            </Link>
          </div>
          <ul className='flex items-center flex-col'>
            {blogPosts.map((post) => (
              <li key={post.id} className='w-full mt-4'>
                <Link
                  href={post.href}
                  className='group flex items-start flex-col py-6 px-4 bg-[#00000083] rounded-lg border border-[#333] hover:border-[#82CD47]'
                >
                  <h3 className='text-[#888] text-l	font-semibold group-hover:text-[#f1f1f1]'>
                    {post.title}
                  </h3>
                  <p className='text-[#666] my-2'>
                    {post.description}
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
