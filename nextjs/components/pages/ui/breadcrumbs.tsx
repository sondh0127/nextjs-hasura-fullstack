import * as React from 'react'

import { Breadcrumb, BreadcrumbItem } from './components'

const Breadcrumbs: React.FC = (props) => {
  const { children } = props
  return (
    <div className="container grid px-6 mx-auto">
      <h1 className="page-title">Breadcrumbs</h1>

      <h2 className="section-title">Basic</h2>
      <div className="flex w-full mb-4 space-x-3">
        <Breadcrumb>
          <BreadcrumbItem>Dashboard</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="flex w-full mb-4 space-x-3">
        <Breadcrumb>
          <BreadcrumbItem>Dashboard</BreadcrumbItem>
          <BreadcrumbItem>Reports</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  )
}

export default Breadcrumbs
