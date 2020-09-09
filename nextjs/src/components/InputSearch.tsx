import * as React from 'react'

import SearchIcon from './icons/SearchIcon'

interface InputSearchProps {
  value?: string
  onChange?: (value: string) => void
}

export const InputSearch: React.FC<InputSearchProps> = (props) => {
  const { children, value, onChange } = props
  return (
    <div className="input-icon-wrapper">
      <input
        type="text"
        className="pl-10 input-text input-active"
        placeholder="Search for projects"
        aria-label="Search"
      />
      <div className="text-purple-500 input-icon-left">
        <SearchIcon />
      </div>
    </div>
  )
}

export default InputSearch
