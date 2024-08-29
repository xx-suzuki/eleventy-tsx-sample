import { RenderContext, TemplateContext } from '@/types/eleventy-types';
import type { PageData } from '@/types/eleventy-types';

export function data(): Omit<PageData, 'content'> {
  return {
    title: 'test page',
    description: 'this is a description',
    layout: '/layouts/sample.11ty.tsx',
  };
}

export function render(this: RenderContext, { collections }: TemplateContext) {
  const slug = this.page.url;
  return (
    <>
      <p>{slug}</p>
      <a href="/">Back to page.</a>
      <h1>Use the layout from layouts/sample.11ty.tsx.</h1>
    </>
  );
}
