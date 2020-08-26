import * as React from 'react'

import { Image } from './components'

export const Images: React.FC = (props) => {
  const { children } = props
  const src =
    'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80'
  return (
    <div className="container grid mx-auto">
      <h1 className="page-title">Cards</h1>
      <h2 className="section-title">Simple</h2>
      <div style={{ maxWidth: 400 }} className="mb-6">
        <Image src={src} alt="Woman paying for a purchase" height="300px" />
      </div>

      <h2 className="section-title">Fixed image</h2>
      <div style={{ maxWidth: 400 }} className="mb-6">
        <Image
          src={src}
          alt="Woman paying for a purchase"
          height="300px"
          isFixed
        />
      </div>
      <h2 className="section-title">Image Fit</h2>
      <div className="grid grid-cols-1 gap-2 mb-6 md:grid-cols-3">
        <Image
          src={src}
          alt="Woman paying for a purchase"
          height="300px"
          fit="contain"
        />
        <Image
          src={src}
          alt="Woman paying for a purchase"
          height="300px"
          fit="cover"
        />
        <Image
          src={src}
          alt="Woman paying for a purchase"
          height="300px"
          fit="fill"
        />
        <Image
          src={src}
          alt="Woman paying for a purchase"
          height="300px"
          fit="none"
        />
        <div className="bg-gray-400">
          <Image
            src={src}
            alt="Woman paying for a purchase"
            width="200px"
            height="200px"
            fit="scale-down"
          />
        </div>
      </div>

      <h2 className="section-title">Image Fit Position</h2>

      <div className="grid grid-cols-1 gap-2 mb-6 md:grid-cols-3">
        <Image
          src={src}
          alt="Woman paying for a purchase"
          width="200px"
          height="200px"
          fit="none"
          fitPosition="left-top"
        />
        <Image
          src={src}
          alt="Woman paying for a purchase"
          width="200px"
          height="200px"
          fit="none"
          fitPosition="top"
        />
        <Image
          src={src}
          alt="Woman paying for a purchase"
          width="200px"
          height="200px"
          fit="none"
          fitPosition="right-top"
        />
        <Image
          src={src}
          alt="Woman paying for a purchase"
          width="200px"
          height="200px"
          fit="none"
          fitPosition="left"
        />
        <Image
          src={src}
          alt="Woman paying for a purchase"
          width="200px"
          height="200px"
          fit="none"
          fitPosition="center"
        />
        <Image
          src={src}
          alt="Woman paying for a purchase"
          width="200px"
          height="200px"
          fit="none"
          fitPosition="right"
        />
        <Image
          src={src}
          alt="Woman paying for a purchase"
          width="200px"
          height="200px"
          fit="none"
          fitPosition="left-bottom"
        />
        <Image
          src={src}
          alt="Woman paying for a purchase"
          width="200px"
          height="200px"
          fit="none"
          fitPosition="bottom"
        />
        <Image
          src={src}
          alt="Woman paying for a purchase"
          width="200px"
          height="200px"
          fit="none"
          fitPosition="right-bottom"
        />
      </div>
    </div>
  )
}

export default Images
