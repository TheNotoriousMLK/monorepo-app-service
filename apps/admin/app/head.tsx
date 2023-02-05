import { NextSeo } from 'next-seo'

import { SEO } from '~/src/app/next-seo.config'

export default function Head() {
  return <NextSeo {...SEO} useAppDir />
}
