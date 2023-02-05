'use client'

import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'
import { styled } from '@mui/material/styles'
import clsx from 'clsx'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled('a')({})

interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<
      NextLinkProps,
      'href' | 'as' | 'onClick' | 'onMouseEnter' | 'onTouchStart'
    > {
  to: NextLinkProps['href']
  linkAs?: NextLinkProps['as']
}

export const NextLinkComposed = React.forwardRef<
  HTMLAnchorElement,
  NextLinkComposedProps
>(function NextLinkComposed(props, ref) {
  const { to, linkAs, replace, scroll, shallow, prefetch, locale, ...other } =
    props

  return (
    <NextLink
      ref={ref}
      passHref
      as={linkAs}
      href={to}
      locale={locale}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      {...other}
    />
  )
})

export type AppLinkProps = {
  activeClassName?: string
  as?: NextLinkProps['as']
  href: NextLinkProps['href']
  linkAs?: NextLinkProps['as'] // Useful when the as prop is shallow by styled().
  noLinkStyle?: boolean
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'> &
  Omit<MuiLinkProps, 'href'>

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
export const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>(
  function Link(props, ref) {
    const {
      activeClassName = 'active',
      as,
      className: classNameProps,
      href,
      linkAs: linkAsProp,
      locale,
      noLinkStyle,
      prefetch,
      replace,
      role: _, // Link don't have roles.
      scroll,
      shallow,
      ...other
    } = props

    const path = usePathname()
    const pathname = typeof href === 'string' ? href : href.pathname
    const className = clsx(classNameProps, {
      [activeClassName]: path === pathname && activeClassName,
    })

    const isExternal =
      typeof href === 'string' &&
      (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0)

    if (isExternal) {
      if (noLinkStyle) {
        return <Anchor ref={ref} className={className} href={href} {...other} />
      }

      return <MuiLink ref={ref} className={className} href={href} {...other} />
    }

    const linkAs = linkAsProp || as
    const nextjsProps = {
      to: href,
      linkAs,
      replace,
      scroll,
      shallow,
      prefetch,
      locale,
    }

    if (noLinkStyle) {
      return (
        <NextLinkComposed
          ref={ref}
          className={className}
          {...nextjsProps}
          {...other}
        />
      )
    }

    return (
      <MuiLink
        ref={ref}
        className={className}
        component={NextLinkComposed}
        {...nextjsProps}
        {...other}
      />
    )
  },
)
