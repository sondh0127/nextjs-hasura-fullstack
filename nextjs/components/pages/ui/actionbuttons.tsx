import * as React from 'react'

import { ActionButtons } from './components'

const _ActionButtons: React.FC = (props) => {
  return (
    <div className="container grid px-6 mx-auto">
      <h1 className="page-title">ActionButtons</h1>
      <div className="w-full mb-4 space-x-5 space-y-2">
        <h2 className="section-title">Basic</h2>
        <ActionButtons />
      </div>
      <div className="w-full mb-4 space-x-5 space-y-2">
        <h2 className="section-title">Colors</h2>
        <ActionButtons color="primary" />
        <ActionButtons color="success" />
        <ActionButtons color="danger" />
        <ActionButtons color="warning" />
      </div>
      <div className="w-full mb-4 space-x-5 space-y-2">
        <h2 className="section-title">Custom text</h2>
        <ActionButtons color="primary" cancelText="Close" submitText="Save" />
        <ActionButtons color="success" cancelText="Close" submitText="Save" />
        <ActionButtons color="danger" cancelText="Close" submitText="Save" />
        <ActionButtons color="danger" cancelText="Close" submitText="Save" />
      </div>
      <div className="w-full mb-4 space-x-5 space-y-2">
        <h2 className="section-title">Loading</h2>
        <ActionButtons
          isLoading
          color="primary"
          cancelText="Close"
          submitText="Save"
        />
        <ActionButtons
          isLoading
          color="success"
          cancelText="Close"
          submitText="Save"
        />
        <ActionButtons
          isLoading
          color="danger"
          cancelText="Close"
          submitText="Save"
        />
        <ActionButtons
          isLoading
          color="danger"
          cancelText="Close"
          submitText="Save"
        />
      </div>
      <div className="w-full mb-4 space-x-5 space-y-2">
        <h2 className="section-title">Custom props</h2>
        <ActionButtons
          color="primary"
          cancelText="Reject"
          cancelProps={{
            disabled: true,
          }}
        />
      </div>
    </div>
  )
}

export default _ActionButtons
