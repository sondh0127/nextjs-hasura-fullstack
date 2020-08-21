import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type NextLinkProps = LinkProps & {
  activeClassName?: string
  inactiveClassName?: string
  className: string
  children: ({
    isActive,
    aClassName,
    href,
  }: {
    isActive: boolean
    aClassName: string
    href: string
  }) => React.ReactNode
}

const NextLink: React.FC<NextLinkProps> = ({
  activeClassName,
  inactiveClassName,
  className,
  children,
  ...rest
}) => {
  const router = useRouter()

  let currentClassName = className
  const isActive = rest.as
    ? router.asPath === rest.as
    : router.pathname === rest.href

  if (isActive) {
    currentClassName += ` ${activeClassName}`
  } else {
    currentClassName += ` ${inactiveClassName}`
  }
  const href = rest.as ? router.asPath : router.pathname

  return (
    <Link {...rest}>
      {children({ isActive, aClassName: currentClassName, href })}
    </Link>
  )
}
export default NextLink
