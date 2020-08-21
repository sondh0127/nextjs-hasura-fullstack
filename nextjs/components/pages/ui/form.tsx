import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { cx } from '../../../utils'
import MailIcon from '../../icons/MailIcon'
import CTA from './components/CTA'

const Form: React.FC = ({ children }) => {
  return (
    <div className="container grid px-6 mx-auto">
      <h1 className="page-title">Form</h1>
      <CTA />
      <h2 className="section-title">Element</h2>
      <div className="mb-8 card">
        <div>
          <label className="label-text">
            <span>input-text</span>
            <input type="text" className="input-text input-text-active" />
          </label>
        </div>
        <div className="mt-4 text-sm">
          <span className="input-label">input-radio</span>
          <div className="mt-2">
            <label className="label-radio">
              <input
                type="radio"
                className="input-radio input-active"
                name="accountType"
                value="personal"
              />
              <span className="ml-2">Personal</span>
            </label>
            <label className="ml-6 label-radio">
              <input
                type="radio"
                className="input-radio input-active"
                name="accountType"
                value="busines"
              />
              <span className="ml-2">Business</span>
            </label>
            <label className="ml-6 label-radio">
              <input
                type="radio"
                className="input-radio input-disabled"
                name="accountType"
                value="busines"
              />
              <span className="ml-2">Disabled</span>
            </label>
          </div>
        </div>
        <div className="mt-4 text-sm">
          <span>input-checkbox</span>
          <div className="mt-2">
            <label className="label-checkbox">
              <input type="checkbox" className="input-checkbox" />
              <span className="ml-2">
                I agree to the <span className="underline">privacy policy</span>
              </span>
            </label>
          </div>
        </div>
        <div className="mt-4 text-sm">
          <label className="label-select">
            <span>input-select</span>
            <select className="input-select input-active">
              <option>$1,000</option>
              <option>$5,000</option>
              <option>$10,000</option>
              <option>$25,000</option>
            </select>
          </label>
        </div>
        <div className="mt-4 text-sm ">
          <label className="label-select">
            <span>input-select-multiple</span>
            <select className="input-select-multiple input-active" multiple>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </label>
        </div>
        <div className="mt-4 text-sm">
          <label className="label-text">
            <span>Message</span>
            <textarea
              className="input-textarea"
              rows={3}
              placeholder="Enter some long form content."
            ></textarea>
          </label>
        </div>
      </div>

      {/*  */}
      <h2 className="section-title">Validation</h2>
      <div className="mb-8 card">
        <div>
          <label className="label-text">
            <span>input-active + helper-text</span>
            <input type="text" className="input-text input-active" />
            <span className="helper-text">
              Password should have more than 6 characters
            </span>
          </label>
        </div>

        <div className="mt-4">
          <label className="label-text">
            <span>input-valid + helper-text-valid</span>
            <input type="text" className="input-text input-valid" />
            <span className="helper-text helper-text-valid">
              Password should have more than 6 characters
            </span>
          </label>
        </div>

        <div className="mt-4">
          <label className="label-text">
            <span>input-invalid + helper-text-invalid</span>
            <input type="text" className="input-text input-invalid" />
            <span className="helper-text helper-text-invalid">
              Password should have more than 6 characters
            </span>
          </label>
        </div>
      </div>

      <h2 className="section-title">Input</h2>
      <div className="mb-8 card">
        <div>
          <label className="label-text">
            <span>input-icon-left</span>
            <div className="input-icon-wrapper">
              <input
                className="pl-10 input-text input-active"
                placeholder="Jane Doe"
              />
              <div className="input-icon-left">
                <MailIcon />
              </div>
            </div>
          </label>
        </div>
        <div className="mt-4">
          <label className="label-text">
            <span>input-icon-right</span>
            <div className="input-icon-wrapper">
              <input
                className="pr-10 input-text input-active"
                placeholder="Jane Doe"
              />
              <div className="input-icon-right">
                <MailIcon />
              </div>
            </div>
          </label>
        </div>
      </div>

      <h2 className="section-title">Button</h2>
      <div className="mb-8 card">
        <div>
          <label className="label-text">
            <span>input-btn-left</span>
            <div className="input-btn-wrapper">
              <input
                className="pl-20 input-text input-active"
                placeholder="Jane Doe"
              />
              <button className="input-btn-left">Click</button>
            </div>
          </label>
        </div>
        <div className="mt-4">
          <label className="label-text">
            <span>input-btn-right</span>
            <div className="input-btn-wrapper">
              <input
                className="input-text input-active"
                placeholder="Jane Doe"
              />
              <button className="input-btn-right">Click</button>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Form
