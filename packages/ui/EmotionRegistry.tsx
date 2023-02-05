'use client'

import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { useServerInsertedHTML } from 'next/navigation'
import { PropsWithChildren, useState } from 'react'

export const EmotionRegistry = ({ children }: PropsWithChildren) => {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'my' })
    cache.compat = true
    const prevInsert = cache.insert
    let inserted: string[] = []
    cache.insert = (...args) => {
      const serialised = args[1]
      if (cache.inserted[serialised.name] === undefined) {
        inserted.push(serialised.name)
      }
      return prevInsert(...args)
    }
    const flush = () => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) return null

    let styles = ''
    for (const name of names) {
      styles += cache.inserted[name]
    }

    return (
      <style
        dangerouslySetInnerHTML={{ __html: styles }}
        key={Date.now() + Math.random() * 1000}
        data-emotion={`${cache.key} ${names.join(' ')}`}
      />
    )
  })

  return <CacheProvider value={cache}>{children}</CacheProvider>
}
