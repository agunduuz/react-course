import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import dynamic from "next/dynamic";
import remarkGfm from "remark-gfm";
import type { ComponentType, ReactNode } from "react";
import type { CustomButtonProps } from "@/components/CustomButton";
import Counter from "@/components/Counter";
import CustomImage, { type CustomImageProps } from "@/components/Images";
import ScrollToTopButton from "../ScrollToTopButton";

const CustomButton = dynamic<CustomButtonProps>(
  () => import("@/components/CustomButton"),
  { ssr: false },
);

type MDXComponents = {
  CustomButton: ComponentType<CustomButtonProps>;
  Image: ComponentType<CustomImageProps>;
  Counter: ComponentType;
  table: ComponentType<{ children?: ReactNode }>;
};

interface CourseLayoutProps {
  content: string;
  backLink: string;
  backText: string;
  components?: MDXComponents;
}

export function CourseLayout({
  content,
  backLink,
  backText,
  components = {
    CustomButton,
    Image: CustomImage,
    Counter,
    table: ({ children }: { children?: ReactNode }) => (
      <div className="table-wrapper">
        <table>{children}</table>
      </div>
    ),
  },
}: CourseLayoutProps) {
  return (
    <article className="bg-[#111] min-h-screen h-full flex flex-col items-center">
      <div className="md:w-[1024px] sm:w-full w-full h-full bg-[#161616] text-[#f1f1f1] md:px-20 px-2 py-5 mdx-content">
        <div className="flex items-center justify-between">
          <Link
            href={backLink}
            className="py-1 px-2 text-[#333] rounded bg-[#82CD47] transition-colors duration-300 text-sm"
          >
            {backText}
          </Link>
          <Link
            href="/"
            className="py-1 px-2 text-[#f1f1f1] rounded bg-[#333] transition-colors duration-300 text-sm"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
        <MDXRemote
          source={content}
          components={components}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
        <ScrollToTopButton />
      </div>
    </article>
  );
}
