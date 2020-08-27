import clsx from 'clsx'
import * as React from 'react'

import { Card } from '..'
import { theme } from '..'
import { CardBody } from '../Card'
import { ChevronDownOutline } from '../heroicons'
import { useCollapseCtx } from './CollapseContext'

type ButtonProps = {
  onClick: () => void
  isCollapsed: boolean
}

interface CollapsePanelProps {
  index?: string
  buttonNode?: (buttonProps: ButtonProps) => React.ReactNode
  title: string
}

// TODO: transition
/* Single Panel as Item, Button, Content Icon */
export const CollapsePanel: React.FC<CollapsePanelProps> = (props) => {
  const { children, buttonNode, title, index } = props

  const { collapses, setCollapses } = useCollapseCtx()

  const isCollapsed = React.useMemo(() => {
    return index ? collapses[Number(index)] : false
  }, [collapses, index])

  const togglePanel = React.useCallback(() => {
    setCollapses(
      collapses.map((item, idx) => {
        if (`${idx}` === index) {
          return !item
        }
        return item
      }),
    )
  }, [collapses, index])

  const collapseStyles = theme.Collapse
  const collapsePanelCls = collapseStyles.panel

  let buttonRender
  if (buttonNode) {
    buttonRender = buttonNode({ onClick: togglePanel, isCollapsed })
  } else {
    const btnCls = collapseStyles.button
    const iconCls = clsx(collapseStyles.icon, isCollapsed && 'rotate-180')
    buttonRender = (
      <div
        className={btnCls}
        role="button"
        tabIndex={0}
        aria-controls="CollapsePanel"
        aria-expanded="false"
        onClick={togglePanel}
        onKeyPress={togglePanel}
      >
        {title}
        <ChevronDownOutline className={iconCls} />
      </div>
    )
  }

  let cardRender = null
  if (isCollapsed) {
    cardRender = cardRender = (
      <Card isStatic>
        <CardBody>{children}</CardBody>
      </Card>
    )
  }

  return (
    <div className={collapsePanelCls}>
      {buttonRender}
      {cardRender}
    </div>
  )
}

export default CollapsePanel
