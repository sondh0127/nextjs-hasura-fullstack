import React from 'react'

interface Props {
  fontSize?: string
}

const Loader: React.FC<Props> = () => {
  return (
    <div className="w-full max-w-4xl text-center">
      <div>Spinner</div>
    </div>
  )
}

export default Loader
