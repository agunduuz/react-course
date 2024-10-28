import Image, { ImageProps } from 'next/image';

type CustomImageProps = Omit<ImageProps, 'alt'> & { alt?: string };

export default function CustomImage(props: CustomImageProps) {
  return (
    <div className='md:w-full h-full flex align-middle justify-center mdx-content'>
      <Image
        {...props}
        alt={props.alt || ''}
        className='w-full md:w-[75%] rounded-xl  shadow-md shadow-white'
      />
    </div>
  );
}