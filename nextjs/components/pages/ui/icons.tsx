import React from 'react'

import {
  AcademicCapOutline,
  AcademicCapSolid,
  ArrowCircleRightOutline,
  ArrowCircleRightSolid,
  MailOutline,
  MailSolid,
} from './components/heroicons'

const Icons: React.FC = ({ children }) => {
  return (
    <div className="container grid px-6 mx-auto">
      <h1 className="page-title">Icons</h1>
      <div>
        <h2 className="section-title">Basic</h2>
        <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
          <AcademicCapSolid size="base" />
          <AcademicCapOutline size="base" />
          <MailOutline size="base" />
          <MailSolid size="base" />
          <ArrowCircleRightOutline />
          <ArrowCircleRightSolid />
        </div>
      </div>
      <div>
        <h2 className="section-title">Sizes</h2>
        <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
          <AcademicCapOutline size="xs" />
          <AcademicCapOutline size="sm" />
          <AcademicCapOutline size="base" />
          <AcademicCapOutline size="lg" />
          <AcademicCapOutline size="xl" />
        </div>
      </div>
      <div>
        <h2 className="section-title">Colors</h2>
        <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
          <AcademicCapOutline size="base" color="primary" />
          <AcademicCapOutline size="base" color="secondary" />
          <AcademicCapOutline size="base" color="success" />
          <AcademicCapOutline size="base" color="danger" />
          <AcademicCapOutline size="base" color="warning" />
          <AcademicCapOutline size="base" color="light" />
          <AcademicCapOutline size="base" color="dark" />
        </div>
      </div>
    </div>
  )
}

export default Icons
