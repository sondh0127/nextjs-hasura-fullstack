import clsx from 'clsx'
import * as React from 'react'

import { IconProps, Theme, theme } from '../'

export type AvatarSize = keyof Theme['Avatar']['size']
// export type AvatarStatus = keyof Theme['Avatar']['status']

export type AvatarProps = {
  size?: AvatarSize
  // shape:
  className?: string
  // image
  alt?: string
  src?: string
  // text
  title?: string
  // icon
  icon?: React.ElementType<IconProps>
  // status: AvatarStatus
}
type Ref = HTMLDivElement

export const Avatar = React.forwardRef<Ref, AvatarProps>((props, ref) => {
  const { size = 'base', className, alt, src, title, icon } = props

  const sizeCls = theme.Avatar.size

  const cls = clsx(
    theme.Avatar.base,
    sizeCls[size],
    className,
    icon && theme.Avatar.avatarIcon,
  )

  let childrenToRender // priority image => icon => text
  if (src) {
    const imgCls = clsx(theme.Avatar.image.base)
    childrenToRender = (
      <img className={imgCls} src={src} alt={alt} loading="lazy" />
    )
  } else if (icon) {
    const Icon = icon
    const iconSizeCls = theme.Avatar.icon.size
    const iconCls = clsx(iconSizeCls[size])
    childrenToRender = <Icon className={iconCls} />
  } else {
    // title
    const titleSizeCls = theme.Avatar.title.size
    const titleCls = clsx(theme.Avatar.title.base, titleSizeCls[size])
    childrenToRender = <span className={titleCls}>PJ</span>
  }

  return (
    <div ref={ref} className={cls}>
      {childrenToRender}
      {/* Some shadow */}
      <div
        className="absolute inset-0 rounded-full shadow-inner"
        aria-hidden="true"
      ></div>
    </div>
  )
})

Avatar.displayName = 'Avatar'
