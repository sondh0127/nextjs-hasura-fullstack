import * as React from 'react'

export type _BlankProps = React.PropsWithChildren<{
  isActive: boolean
}>
type Ref = HTMLDivElement

export const _Blank = React.forwardRef<Ref, _BlankProps>((props, ref) => {
  const { children } = props
  return <div ref={ref}>{children}</div>
})

_Blank.displayName = '_Blank'

export default _Blank
