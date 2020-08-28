import * as React from 'react'

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
} from './components'

export type DrawersProps = React.PropsWithChildren<{
  className?: string
}>
type Ref = HTMLDivElement

export const Drawers = React.forwardRef<Ref, DrawersProps>((props, ref) => {
  const [openDrawerId, setOpenDrawerId] = React.useState('')
  return (
    <div className="grid px-6 ">
      <h1 className="page-title">Modal</h1>
      <h2 className="section-title">Basic</h2>
      <div className="mb-6">
        <Button onClick={() => setOpenDrawerId('0')}>Open drawer</Button>
        <Drawer
          isOpen={openDrawerId === '0'}
          onClose={() => setOpenDrawerId('')}
          onSubmit={() => {
            console.log({ openDrawerId })
          }}
          size="sm"
        >
          <DrawerHeader>Basic: Drawer Title</DrawerHeader>
          <DrawerBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae?
          </DrawerBody>
          <DrawerFooter />
        </Drawer>
      </div>
      <h2 className="section-title">Sizes</h2>
      <div className="mb-6">
        <Button onClick={() => setOpenDrawerId('1')}>Open small drawer</Button>
        <Drawer
          isOpen={openDrawerId === '1'}
          onClose={() => setOpenDrawerId('')}
          onSubmit={() => {
            console.log({ openDrawerId })
          }}
          size="sm"
        >
          <DrawerHeader>Basic: Drawer Title</DrawerHeader>
          <DrawerBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae?
          </DrawerBody>
          <DrawerFooter />
        </Drawer>
      </div>
      <div className="mb-6">
        <Button onClick={() => setOpenDrawerId('2')}>Open large drawer</Button>
        <Drawer
          isOpen={openDrawerId === '2'}
          onClose={() => setOpenDrawerId('')}
          onSubmit={() => {
            console.log({ openDrawerId })
          }}
          size="lg"
        >
          <DrawerHeader>Basic: Drawer Title</DrawerHeader>
          <DrawerBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae?
          </DrawerBody>
          <DrawerFooter />
        </Drawer>
      </div>
      <div className="mb-6">
        <Button onClick={() => setOpenDrawerId('3')}>
          Open fullscreen drawer
        </Button>
        <Drawer
          isOpen={openDrawerId === '3'}
          onClose={() => setOpenDrawerId('')}
          onSubmit={() => {
            console.log({ openDrawerId })
          }}
          size="full"
        >
          <DrawerHeader>Basic: Drawer Title</DrawerHeader>
          <DrawerBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae?
          </DrawerBody>
          <DrawerFooter />
        </Drawer>
      </div>
      <h2 className="section-title">Positions</h2>
      <div className="mb-6">
        <Button onClick={() => setOpenDrawerId('4')}>Open left drawer</Button>
        <Drawer
          isOpen={openDrawerId === '4'}
          onClose={() => setOpenDrawerId('')}
          onSubmit={() => {
            console.log({ openDrawerId })
          }}
          size="base"
        >
          <DrawerHeader>Basic: Drawer Title</DrawerHeader>
          <DrawerBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae?
          </DrawerBody>
          <DrawerFooter />
        </Drawer>
      </div>

      <div className="mb-6">
        <Button onClick={() => setOpenDrawerId('5')}>Open right drawer</Button>
        <Drawer
          isOpen={openDrawerId === '5'}
          onClose={() => setOpenDrawerId('')}
          onSubmit={() => {
            console.log({ openDrawerId })
          }}
          size="base"
          position="right"
        >
          <DrawerHeader>Basic: Drawer Title</DrawerHeader>
          <DrawerBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae?
          </DrawerBody>
          <DrawerFooter />
        </Drawer>
      </div>
    </div>
  )
})

Drawers.displayName = 'Drawers'

export default Drawers
