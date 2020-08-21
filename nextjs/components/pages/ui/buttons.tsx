import React, { useCallback, useEffect, useMemo, useState } from 'react'

import CTA from './components/CTA'

const Buttons: React.FC = ({ children }) => {
  const icon = (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
    </svg>
  )

  return (
    <div className="container grid px-6 mx-auto">
      <h1 className="page-title">Buttons</h1>
      <CTA />
      <h2 className="section-title">Size</h2>
      <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <button className="btn btn-sm btn-primary">btn-sm</button>
        </div>
        <div>
          <button className="btn btn-base btn-primary">btn-base</button>
        </div>
        <div>
          <button className="btn btn-lg btn-primary">btn-lg</button>
        </div>
      </div>
      <h2 className="section-title">Variant</h2>
      <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <button className="btn btn-base btn-primary">btn-primary</button>
        </div>
        <div>
          <button className="btn btn-base btn-outline">btn-outline</button>
        </div>
        <div>
          <button className="btn btn-base btn-link">btn-link</button>
        </div>
      </div>

      <h2 className="section-title">With Icon</h2>
      <h3 className="text-base text-gray-500">
        Not support: Automatically changed size of icon base on size of button
      </h3>
      <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <button className="btn btn-base btn-primary">
            <span className="mr-2">{icon}</span> Icon left
          </button>
        </div>
        <div>
          <button className="btn btn-base btn-primary">
            Icon right <span className="ml-2">{icon}</span>
          </button>
        </div>
        <div>
          <button className="btn btn-base btn-primary">
            <span className="mr-2">{icon}</span>Two icon
            <span className="ml-2">{icon}</span>
          </button>
        </div>
      </div>

      <h2 className="section-title">Button Icon</h2>
      <div className="flex flex-col flex-wrap mb-3 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <button className="btn btn-icon-sm btn-primary">
            <span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
            </span>
          </button>
        </div>
        <div>
          <button className="btn btn-icon-base btn-primary">
            <span>{icon}</span>
          </button>
        </div>
        <div>
          <button className="btn btn-icon-lg btn-primary">
            <span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <h2 className="section-title">Button Icon</h2>
      <div className="flex flex-col flex-wrap mb-3 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <button className="btn btn-base btn-primary btn-disabled">
            btn-primary
          </button>
        </div>
        <div>
          <button className="btn btn-base btn-outline btn-disabled">
            btn-outline
          </button>
        </div>
        <div>
          <button className="btn btn-base btn-link btn-disabled">
            btn-link
          </button>
        </div>
      </div>
      <h2 className="section-title">Block (w-full)</h2>
      <div className="flex flex-col flex-wrap mb-3 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div className="w-full">
          <button className="w-full btn btn-base btn-primary">
            btn-primary
          </button>
        </div>
      </div>
    </div>
  )
}

export default Buttons
