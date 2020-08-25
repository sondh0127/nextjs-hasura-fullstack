import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { Alert } from './components'

const Alerts: React.FC = ({ children }) => {
  return (
    <div className="container grid px-6 mx-auto">
      <h1 className="page-title">Alerts</h1>

      <div className="w-full mb-4 space-y-3">
        <h2 className="section-title">Basic</h2>
        <Alert title="A alert that informs you of stuff"></Alert>
      </div>
      <div className="w-full mb-4 space-y-3">
        <h2 className="section-title">Colors</h2>
        <Alert
          title="A alert that informs you of stuff"
          color="primary"
        ></Alert>
        <Alert
          title="A alert that informs you of stuff"
          color="secondary"
        ></Alert>
        <Alert
          title="A alert that informs you of stuff"
          color="success"
        ></Alert>
        <Alert title="A alert that informs you of stuff" color="danger"></Alert>
        <Alert
          title="A alert that informs you of stuff"
          color="warning"
        ></Alert>
        <Alert title="A alert that informs you of stuff" color="light"></Alert>
        <Alert title="A alert that informs you of stuff" color="dark"></Alert>
      </div>
      <div className="w-full mb-4 space-y-3">
        <h2 className="section-title">Closable</h2>
        <Alert
          title="A alert that informs you of stuff"
          hasClose
          color="primary"
        ></Alert>
        <Alert
          title="A alert that informs you of stuff"
          hasClose
          color="secondary"
        ></Alert>
        <Alert
          title="A alert that informs you of stuff"
          hasClose
          color="success"
        ></Alert>
        <Alert
          title="A alert that informs you of stuff"
          hasClose
          color="danger"
        ></Alert>
        <Alert
          title="A alert that informs you of stuff"
          hasClose
          color="warning"
        ></Alert>
        <Alert
          title="A alert that informs you of stuff"
          hasClose
          color="light"
        ></Alert>
        <Alert
          title="A alert that informs you of stuff"
          hasClose
          color="dark"
        ></Alert>
      </div>
      <div className="w-full mb-4 space-y-3">
        <h2 className="section-title">Outline</h2>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          variant="outline"
          color="primary"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          variant="outline"
          color="secondary"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          variant="outline"
          color="success"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          variant="outline"
          color="danger"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          variant="outline"
          color="warning"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          variant="outline"
          color="light"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          variant="outline"
          color="dark"
        ></Alert>
      </div>

      <div className="w-full mb-4 space-y-3">
        <h2 className="section-title">Solid</h2>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          variant="solid"
          color="primary"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          variant="solid"
          color="secondary"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          variant="solid"
          color="success"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          variant="solid"
          color="danger"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          variant="solid"
          color="warning"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          variant="solid"
          color="light"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          variant="solid"
          color="dark"
        ></Alert>
      </div>

      <div className="w-full mb-4 space-y-3">
        <h2 className="section-title">Bordered</h2>
        <Alert
          title="A alert that informs you of stuff"
          color="primary"
          bordered="top"
          hasClose
        ></Alert>
        <Alert
          title="A alert that informs you of stuff"
          color="secondary"
          bordered="right"
          hasClose
        ></Alert>
        <Alert
          title="A alert that informs you of stuff"
          color="success"
          bordered="bottom"
          hasClose
        ></Alert>
        <Alert
          title="A alert that informs you of stuff"
          color="danger"
          bordered="left"
          hasClose
        ></Alert>
      </div>

      <div className="w-full mb-4 space-y-3">
        <h2 className="section-title">Size</h2>
        <Alert
          title="A alert that informs you of stuff"
          color="primary"
          size="sm"
          hasClose
        ></Alert>
        <Alert
          title="A alert that informs you of stuff"
          color="secondary"
          size="base"
          hasClose
        ></Alert>
        <Alert
          title="A alert that informs you of stuff"
          color="success"
          size="lg"
          hasClose
        ></Alert>
      </div>

      <div className="w-full mb-4 space-y-3">
        <h2 className="section-title">Status</h2>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          color="primary"
          statusIcon="primary"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          color="secondary"
          statusIcon="primary"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          color="success"
          statusIcon="success"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          color="danger"
          statusIcon="danger"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          color="warning"
          statusIcon="warning"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          color="light"
          statusIcon="primary"
        ></Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          color="dark"
          statusIcon="primary"
        ></Alert>
      </div>
      <div className="w-full mb-4 space-y-3">
        <h2 className="section-title">With description</h2>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          color="primary"
          statusIcon="primary"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          color="secondary"
          statusIcon="primary"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          color="success"
          statusIcon="success"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          color="danger"
          statusIcon="danger"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          color="warning"
          statusIcon="warning"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          color="light"
          statusIcon="primary"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
        <Alert
          hasClose
          title="A alert that informs you of stuff"
          color="dark"
          statusIcon="primary"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
      </div>
    </div>
  )
}

export default Alerts
