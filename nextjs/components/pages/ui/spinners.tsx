import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { Spinner } from './components'

const Spinners: React.FC = ({ children }) => {
  return (
    <div className="container grid px-6 mx-auto">
      <h1 className="page-title">Spinner</h1>
      <h2 className="section-title">Basic</h2>
      <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
        <Spinner />
      </div>
      <h2 className="section-title">Color</h2>
      <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
        <Spinner className="text-purple-600" />
        <Spinner className="text-gray-600" />
        <Spinner className="text-green-600" />
        <Spinner className="text-red-600" />
        <Spinner className="text-yellow-600" />
      </div>
      <h2 className="section-title">Size</h2>
      <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
        <Spinner size="sm" />
        <Spinner />
        <Spinner size="lg" />
      </div>
    </div>
  )
}

export default Spinners
