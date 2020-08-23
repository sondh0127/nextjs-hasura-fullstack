import React from 'react'

import { Button } from './components'
import CTA from './components/CTA'
import { MailSolid } from './components/heroicons'

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
      <div>
        <Button
          size="lg"
          color="primary"
          variant="default"
          iconLeft={MailSolid}
        >
          Enable
        </Button>
      </div>

      <h2 className="section-title">Colors</h2>
      <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
        <Button size="base" variant="default" color="primary">
          btn-primary
        </Button>
        <Button size="base" variant="default" color="secondary">
          btn-secondary
        </Button>
        <Button size="base" variant="default" color="success">
          btn-success
        </Button>
        <Button size="base" variant="default" color="danger">
          btn-danger
        </Button>
        <Button size="base" variant="default" color="warning">
          btn-warning
        </Button>
        <Button size="base" variant="default" color="link">
          btn-link
        </Button>
        <Button size="base" variant="default" color="light">
          btn-light
        </Button>
        <Button size="base" variant="default" color="dark">
          btn-dark
        </Button>
      </div>
      <h2 className="section-title">Light Buttons</h2>
      <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
        <Button size="base" variant="light" color="primary">
          btn-primary
        </Button>
        <Button size="base" variant="light" color="secondary">
          btn-secondary
        </Button>
        <Button size="base" variant="light" color="success">
          btn-success
        </Button>
        <Button size="base" variant="light" color="danger">
          btn-danger
        </Button>
        <Button size="base" variant="light" color="warning">
          btn-warning
        </Button>
        <Button size="base" variant="light" color="link">
          btn-link
        </Button>
        <Button size="base" variant="light" color="light">
          btn-light
        </Button>
        <Button size="base" variant="light" color="dark">
          btn-dark
        </Button>
      </div>
      <h2 className="section-title">Outline Buttons</h2>
      <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
        <Button size="base" variant="outline" color="primary">
          btn-primary
        </Button>
        <Button size="base" variant="outline" color="secondary">
          btn-secondary
        </Button>
        <Button size="base" variant="outline" color="success">
          btn-success
        </Button>
        <Button size="base" variant="outline" color="danger">
          btn-danger
        </Button>
        <Button size="base" variant="outline" color="warning">
          btn-warning
        </Button>
        <Button size="base" variant="outline" color="link">
          btn-link
        </Button>
        <Button size="base" variant="outline" color="light">
          btn-light
        </Button>
        <Button size="base" variant="outline" color="dark">
          btn-dark
        </Button>
      </div>
      <h2 className="section-title">Button Sizes</h2>
      <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
        <Button size="xs" color="primary" variant="default">
          Enable
        </Button>
        <Button size="sm" color="primary" variant="default">
          Enable
        </Button>
        <Button size="base" color="primary" variant="default">
          Enable
        </Button>
        <Button size="lg" color="primary" variant="default">
          Enable
        </Button>
        <Button size="xl" color="primary" variant="default">
          Enable
        </Button>
      </div>
      <h2 className="section-title">Block</h2>
      <div className="flex flex-col flex-wrap mb-3 space-y-4 md:flex-row md:items-end md:space-x-4">
        <Button size="base" color="primary" variant="default" block>
          Block
        </Button>
      </div>
      <h2 className="section-title">Loading</h2>
      <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
        <Button size="xs" color="primary" variant="default" isLoading>
          Enable
        </Button>
        <Button size="sm" color="primary" variant="default" isLoading>
          Enable
        </Button>
        <Button size="base" color="primary" variant="default" isLoading>
          Enable
        </Button>
        <Button size="lg" color="primary" variant="default" isLoading>
          Enable
        </Button>
        <Button size="xl" color="primary" variant="default" isLoading>
          Enable
        </Button>
      </div>

      <h2 className="section-title">Icon left</h2>
      <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
        <Button
          size="xs"
          color="primary"
          variant="default"
          iconLeft={MailSolid}
        >
          Enable
        </Button>
        <Button
          size="sm"
          color="primary"
          variant="default"
          iconLeft={MailSolid}
        >
          Enable
        </Button>
        <Button
          size="base"
          color="primary"
          variant="default"
          iconLeft={MailSolid}
        >
          Enable
        </Button>
        <Button
          size="lg"
          color="primary"
          variant="default"
          iconLeft={MailSolid}
        >
          Enable
        </Button>
        <Button
          size="xl"
          color="primary"
          variant="default"
          iconLeft={MailSolid}
        >
          Enable
        </Button>
      </div>

      <h2 className="section-title">Icon right</h2>
      <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
        <Button
          size="xs"
          color="primary"
          variant="default"
          iconRight={MailSolid}
        >
          Enable
        </Button>
        <Button
          size="sm"
          color="primary"
          variant="default"
          iconRight={MailSolid}
        >
          Enable
        </Button>
        <Button
          size="base"
          color="primary"
          variant="default"
          iconRight={MailSolid}
        >
          Enable
        </Button>
        <Button
          size="lg"
          color="primary"
          variant="default"
          iconRight={MailSolid}
        >
          Enable
        </Button>
        <Button
          size="xl"
          color="primary"
          variant="default"
          iconRight={MailSolid}
        >
          Enable
        </Button>
      </div>

      <h2 className="section-title">Icon left and right</h2>
      <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
        <Button
          size="xs"
          color="primary"
          variant="default"
          iconRight={MailSolid}
          iconLeft={MailSolid}
        >
          Enable
        </Button>
        <Button
          size="sm"
          color="primary"
          variant="default"
          iconRight={MailSolid}
          iconLeft={MailSolid}
        >
          Enable
        </Button>
        <Button
          size="base"
          color="primary"
          variant="default"
          iconRight={MailSolid}
          iconLeft={MailSolid}
        >
          Enable
        </Button>
        <Button
          size="lg"
          color="primary"
          variant="default"
          iconRight={MailSolid}
          iconLeft={MailSolid}
        >
          Enable
        </Button>
        <Button
          size="xl"
          color="primary"
          variant="default"
          iconRight={MailSolid}
          iconLeft={MailSolid}
        >
          Enable
        </Button>
      </div>

      <h2 className="section-title">Button Icon TODO:</h2>
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
    </div>
  )
}

export default Buttons
