import { RenderContext, TemplateContext } from "@/types/eleventy-types";
import { Header } from "@site/includes/components/header";
import { Footer } from "@site/includes/components/footer";

export function RootLayout(
  this: RenderContext,
  {
    title,
    description,
    site,
    content,
    page,
    eleventy,
    ...props
  }: TemplateContext,
) {
  const canonicalURL = this.url(
    site.baseUrl + (props.canonicalURL ?? page.url),
  );
  const pageTitle = title ? `${title} | ${site.siteTitle}` : site.siteTitle;
  return (
    <>
      <html lang={site.siteLang}>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          {!!description && (
            <meta name="description" content={description} />
          )}
          <title>{pageTitle}</title>
          <link rel="canonical" href={canonicalURL} />
        </head>

        <body>
          <Header />
            <p>sample.11ty.tsx</p>
            <main dangerouslySetInnerHTML={{ __html: content }} />
          <Footer />
        </body>
      </html>
    </>
  );
}

export const render = RootLayout;
