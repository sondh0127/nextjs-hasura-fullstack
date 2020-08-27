import clsx from 'clsx'
import * as React from 'react'

import { theme } from '..'
import { CollapseProvider } from './CollapseContext'

export type CollapseProps = React.PropsWithChildren<{
  hasBorder?: boolean
}>
type Ref = HTMLDivElement

export const Collapse = React.forwardRef<Ref, CollapseProps>((props, ref) => {
  const { children, hasBorder } = props
  const [collapses, setCollapses] = React.useState(
    Array.from(Array(React.Children.count(children)), () => false),
  )

  const renderChildren = React.useMemo(() => {
    return React.Children.map(children, (el, idx) => {
      return React.isValidElement(el)
        ? React.cloneElement(el, { index: `${idx}` })
        : null
    })
  }, [children])

  const callapseValue = React.useMemo(() => {
    return {
      collapses,
      setCollapses,
    }
  }, [collapses])

  const collapseStyle = theme.Collapse
  const collapseCls = clsx(
    collapseStyle.base,
    hasBorder && collapseStyle.bordered,
  )

  return (
    <CollapseProvider value={callapseValue}>
      <div ref={ref} className={collapseCls}>
        {renderChildren}
      </div>
    </CollapseProvider>
  )
})

Collapse.displayName = 'Collapse'

export default Collapse
