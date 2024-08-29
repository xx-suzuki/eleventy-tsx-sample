import { About } from '@site/includes/components/about';
import type { PageData, RenderContext, TemplateContext } from '@/types/eleventy-types';

export function data(): Omit<PageData, 'content'> {
  return {
    title: 'Front page',
    description: 'this is a description',
    // layout: '',
  };
}

export function render(this: RenderContext, { collections }: TemplateContext) {
  return (
    <>
      <h1>Hi there!</h1>
      <a href="/test/">Go to next page.</a>
      <About className='about' />
    </>
  );
}
