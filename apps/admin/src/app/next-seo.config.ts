import { NextSeoProps } from 'next-seo'

const url = process.env.NEXT_PUBLIC_URL

export const SEO: NextSeoProps = {
  defaultTitle: 'Next.js App Template Admin',
  titleTemplate: '%s | MLK',
  description: 'A custom Next.js App template using the app/ directory.',
  noindex: true,
  nofollow: true,
  openGraph: {
    locale: 'en_GB',
    site_name: 'Next.js App Template',
    type: 'website',
    url,
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'initial-scale=1, width=device-width',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
  ],
}
