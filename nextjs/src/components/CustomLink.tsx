import Link from 'next/link'
import { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type CustomLinkChildren = (props: {
  isActive: boolean
  href: string
}) => React.ReactNode

export type CustomLinkProps = LinkProps & {
  children: CustomLinkChildren
}

const CustomLink: React.FC<CustomLinkProps> = ({ children, ...rest }) => {
  const router = useRouter()

  const isActive = rest.as
    ? router.asPath === rest.as
    : router.pathname === rest.href
  const href = rest.as ? router.asPath : router.pathname

  return <Link {...rest}>{children({ isActive, href })}</Link>
}

export default CustomLink
