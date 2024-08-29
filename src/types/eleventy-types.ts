// https://www.11ty.dev/docs/data-eleventy-supplied/
export type PageContext = {
  url: string | false;
  fileSlug: string;
  filePathStem: string;
  date: Date;
  inputPath: string;
  outputPath: string | false;
  outputFileExtension: string;
  templateSyntax: string;
  rawInput: string;
};

export type PageData = {
  content: string;
  title?: string;
  description?: string;
  layout: string;
} & Record<string, unknown>;

export type Collection = CollectionItem[];

export type CollectionItem = {
  page: PageContext;
  data: PageData;
  rawInput: string;
  content: string;
};

export type EleventyContext = {
  generator: string;
  env: {
    root: string;
    config: string;
    source: string;
    runMode: string;
  } & Record<string, string>;
  directories: Record<string, string | undefined>;
};

export type TemplateContext = {
  eleventy: EleventyContext;
  pkg: Record<string, unknown>;
  page: PageContext;
  collections: {
    all: Collection;
  } & Record<string, Collection>;
} & PageData & {
    site: {
      // data/site.json
      siteTitle: string;
      siteLang: string;
      baseUrl: string;
    };
  };

export type RenderContext = {
  eleventy: EleventyContext;
  page: PageContext;
  url: (path: string) => string;
  slugify: (input: string) => string;
  log: (input: string) => void;
  inputPathToUrl: (inputPath: string) => string;
};
