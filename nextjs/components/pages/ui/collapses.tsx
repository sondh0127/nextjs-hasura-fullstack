import * as React from 'react'

import { Button, Collapse, CollapsePanel } from './components'

export const Collapses: React.FC = (props) => {
  const { children } = props
  return (
    <div className="container grid mx-auto">
      <h1 className="page-title">Collapses</h1>
      <h2 className="section-title">Simple</h2>
      <div>
        <Collapse>
          <CollapsePanel
            title="Open Collapse"
            buttonNode={({ onClick, isCollapsed }) => (
              <Button onClick={onClick}>Open Colapse</Button>
            )}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quaerat officia, atque iste ut excepturi minus? Tempora unde culpa
            odit dignissimos
          </CollapsePanel>
          <CollapsePanel title="Open Collapse">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quaerat officia, atque iste ut excepturi minus? Tempora unde culpa
            odit dignissimos
          </CollapsePanel>
          <CollapsePanel title="Open Collapse">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quaerat officia, atque iste ut excepturi minus? Tempora unde culpa
            odit dignissimos
          </CollapsePanel>
        </Collapse>
      </div>
    </div>
  )
}

export default Collapses
