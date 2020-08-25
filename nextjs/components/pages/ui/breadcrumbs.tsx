import * as React from 'react'

import { Breadcrumb, BreadcrumbItem } from './components'
import { DocumentReportOutline, StarOutline } from './components/heroicons'

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
          <BreadcrumbItem>
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem isActive>Reports</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="flex w-full mb-4 space-x-3">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem isActive>Export</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <h2 className="section-title">Sizes</h2>
      <div className="flex w-full mb-4 space-x-3">
        <Breadcrumb className="justify-start">
          <BreadcrumbItem size="sm">
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem size="sm">
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem size="sm" isActive>
            Export
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="flex w-full mb-4 space-x-3">
        <Breadcrumb className="justify-start">
          <BreadcrumbItem size="base">
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem size="base">
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem size="base" isActive>
            Export
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex w-full mb-4 space-x-3">
        <Breadcrumb className="justify-start">
          <BreadcrumbItem size="lg">
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem size="lg">
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem size="lg" isActive>
            Export
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <h2 className="section-title">Icons</h2>
      <div className="flex w-full mb-4 space-x-3">
        <Breadcrumb className="justify-start">
          <BreadcrumbItem size="sm" icon={StarOutline}>
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem size="sm" icon={StarOutline}>
            <a href="#">Reports</a>
          </BreadcrumbItem>
          <BreadcrumbItem size="sm" isActive icon={DocumentReportOutline}>
            Export
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="flex w-full mb-4 space-x-3">
        <Breadcrumb className="justify-start">
          <BreadcrumbItem size="base" icon={StarOutline}>
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem size="base" icon={StarOutline}>
            <a href="#">Reports</a>
          </BreadcrumbItem>
          <BreadcrumbItem size="base" isActive icon={DocumentReportOutline}>
            Export
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex w-full mb-4 space-x-3">
        <Breadcrumb className="justify-start">
          <BreadcrumbItem size="lg" icon={StarOutline}>
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem size="lg" icon={StarOutline}>
            <a href="#">Reports</a>
          </BreadcrumbItem>
          <BreadcrumbItem size="lg" isActive icon={DocumentReportOutline}>
            Export
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <h2 className="section-title">Separator</h2>
      <div className="flex w-full mb-4 space-x-3">
        <Breadcrumb className="justify-start">
          <BreadcrumbItem size="sm" icon={StarOutline}>
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem size="sm" icon={StarOutline}>
            <a href="#">Reports</a>
          </BreadcrumbItem>
          <BreadcrumbItem size="sm" isActive icon={DocumentReportOutline}>
            Export
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="flex w-full mb-4 space-x-3">
        <Breadcrumb className="justify-start">
          <BreadcrumbItem separator="arrow" size="base" icon={StarOutline}>
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem separator="arrow" size="base" icon={StarOutline}>
            <a href="#">Reports</a>
          </BreadcrumbItem>
          <BreadcrumbItem
            separator="arrow"
            size="base"
            isActive
            icon={DocumentReportOutline}
          >
            Export
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="flex w-full mb-4 space-x-3">
        <Breadcrumb className="justify-start">
          <BreadcrumbItem separator="arrowhead" size="base" icon={StarOutline}>
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem separator="arrowhead" size="base" icon={StarOutline}>
            <a href="#">Reports</a>
          </BreadcrumbItem>
          <BreadcrumbItem
            separator="arrowhead"
            size="base"
            isActive
            icon={DocumentReportOutline}
          >
            Export
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex w-full mb-4 space-x-3">
        <Breadcrumb className="justify-start">
          <BreadcrumbItem separator="bullet" size="lg" icon={StarOutline}>
            <a href="#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem separator="bullet" size="lg" icon={StarOutline}>
            <a href="#">Reports</a>
          </BreadcrumbItem>
          <BreadcrumbItem
            separator="bullet"
            size="lg"
            isActive
            icon={DocumentReportOutline}
          >
            Export
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  )
}

export default Breadcrumbs
