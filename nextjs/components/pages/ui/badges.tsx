import * as React from 'react'

import { Badge } from './components'

const Badges: React.FC = (props) => {
  const { children } = props
  return (
    <div className="container grid px-6 mx-auto">
      <h1 className="page-title">Badges</h1>

      <h2 className="section-title">Basic</h2>
      <div className="flex w-full mb-4 space-x-3">
        <Badge>Badge</Badge>
        <Badge>Badge2</Badge>
      </div>

      <h2 className="section-title">Solid Color</h2>
      <div className="flex w-full mb-4 space-x-3">
        <Badge variant="solid" color="primary">
          primary
        </Badge>
        <Badge variant="solid" color="secondary">
          secondary
        </Badge>
        <Badge variant="solid" color="success">
          success
        </Badge>
        <Badge variant="solid" color="danger">
          danger
        </Badge>
        <Badge variant="solid" color="warning">
          warning
        </Badge>
        <Badge variant="solid" color="light">
          light
        </Badge>
        <Badge variant="solid" color="dark">
          dark
        </Badge>
      </div>
      <h2 className="section-title">Light Color</h2>
      <div className="flex w-full mb-4 space-x-3">
        <Badge variant="light" color="primary">
          primary
        </Badge>
        <Badge variant="light" color="secondary">
          secondary
        </Badge>
        <Badge variant="light" color="success">
          success
        </Badge>
        <Badge variant="light" color="danger">
          danger
        </Badge>
        <Badge variant="light" color="warning">
          warning
        </Badge>
        <Badge variant="light" color="light">
          light
        </Badge>
        <Badge variant="light" color="dark">
          dark
        </Badge>
      </div>
      <h2 className="section-title">Closable</h2>
      <div className="flex w-full mb-4 space-x-3">
        <Badge variant="solid" hasClose color="primary">
          primary
        </Badge>
        <Badge variant="solid" hasClose color="secondary">
          secondary
        </Badge>
        <Badge variant="solid" hasClose color="success">
          success
        </Badge>
        <Badge variant="solid" hasClose color="danger">
          danger
        </Badge>
        <Badge variant="solid" hasClose color="warning">
          warning
        </Badge>
        <Badge variant="solid" hasClose color="light">
          light
        </Badge>
        <Badge variant="solid" hasClose color="dark">
          dark
        </Badge>
      </div>
    </div>
  )
}

export default Badges
