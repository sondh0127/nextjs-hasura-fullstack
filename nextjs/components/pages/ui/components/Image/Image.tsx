import clsx from 'clsx'
import * as React from 'react'

import { Theme, theme } from '..'

export type ImageFit = keyof Theme['Image']['fit']
export type ImageFitPosition = keyof Theme['Image']['fitPosition']

export type ImageProps = React.PropsWithChildren<{
  src: string
  alt: string
  className?: string
  /** How the image object fits its bounds */
  fit?: ImageFit
  /* Positioning of the fitted image. */
  fitPosition?: ImageFitPosition
  /* Fix the width of image. Not responsive of screen width is smaller than image */
  isFixed?: boolean
  width?: React.CSSProperties['width']
  height?: React.CSSProperties['height']
}>
type Ref = HTMLImageElement

export const Image = React.forwardRef<Ref, ImageProps>((props, ref) => {
  const {
    children,
    className,
    alt,
    src,
    fit,
    fitPosition,
    isFixed,
    width,
    height,
  } = props

  const imageStyles = theme.Image

  const cls = clsx(
    className,
    imageStyles.base,
    isFixed && imageStyles.fixed,
    fit && imageStyles.fit[fit],
    fitPosition && imageStyles.fitPosition[fitPosition],
  )

  return (
    <img
      className={cls}
      ref={ref}
      alt={alt}
      src={src}
      style={{
        width,
        height,
      }}
    >
      {children}
    </img>
  )
})

Image.displayName = 'Image'

export default Image
