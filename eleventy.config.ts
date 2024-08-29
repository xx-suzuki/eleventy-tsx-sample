import { renderToStaticMarkup } from 'react-dom/server';
import type { UserConfig } from '@11ty/eleventy';
export default function (eleventyConfig: UserConfig) {
  eleventyConfig.setUseGitIgnore(false);

  // TSX support.
  eleventyConfig.addExtension(['11ty.ts', '11ty.tsx'], {
    key: '11ty.js',
    compile: () => {
      return async function (this: any, data: any) {
        const content = await this.defaultRenderer(data);
        return renderToStaticMarkup(content);
      };
    },
  });
  eleventyConfig.addTemplateFormats('11ty.ts,11ty.tsx');

  // Defaults
  eleventyConfig.addLayoutAlias('root', 'layouts/default.11ty.tsx');
  eleventyConfig.addGlobalData('layout', 'root');

  return {
    dir: {
      input: 'src/site/pages',
      includes: '../includes',
      // layouts: '../layouts',
      data: '../data',
      output: 'dist',
    },
  };
}
