import * as React from 'react'

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from './components'

const Dialogs: React.FC = ({ children }) => {
  const [openDialogId, setOpenDialogId] = React.useState('')
  return (
    <div className="grid px-6 ">
      <h1 className="page-title">Modal</h1>
      <h2 className="section-title">Basic</h2>
      <div className="mb-6">
        <Button onClick={() => setOpenDialogId('0')}>Open diaglog</Button>
        <Dialog
          isOpen={openDialogId === '0'}
          onClose={() => setOpenDialogId('')}
          onSubmit={() => {
            console.log({ openDialogId })
          }}
        >
          <DialogHeader>Basic: Dialog Title</DialogHeader>
          <DialogBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae?
          </DialogBody>
          <DialogFooter />
        </Dialog>
      </div>
      <h2 className="section-title">Sizes</h2>
      <div className="mb-6">
        <Button onClick={() => setOpenDialogId('1')}>Open small diaglog</Button>
        <Dialog
          isOpen={openDialogId === '1'}
          onClose={() => setOpenDialogId('')}
          onSubmit={() => {
            console.log({ openDialogId })
          }}
          size="sm"
        >
          <DialogHeader>Sizes: sm Dialog Title</DialogHeader>
          <DialogBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae?
          </DialogBody>
          <DialogFooter />
        </Dialog>
      </div>
      <div className="mb-6">
        <Button onClick={() => setOpenDialogId('2')}>Open large diaglog</Button>
        <Dialog
          isOpen={openDialogId === '2'}
          onClose={() => setOpenDialogId('')}
          onSubmit={() => {
            console.log({ openDialogId })
          }}
          size="lg"
        >
          <DialogHeader>Sizes: lg Dialog Title</DialogHeader>
          <DialogBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae?
          </DialogBody>
          <DialogFooter />
        </Dialog>
      </div>
      <div className="mb-6">
        <Button onClick={() => setOpenDialogId('3')}>
          Open fullscreen diaglog
        </Button>
        <Dialog
          isOpen={openDialogId === '3'}
          onClose={() => setOpenDialogId('')}
          onSubmit={() => {
            console.log({ openDialogId })
          }}
          size="full"
        >
          <DialogHeader>Sizes: lg Dialog Title</DialogHeader>
          <DialogBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae?
          </DialogBody>
          <DialogFooter />
        </Dialog>
      </div>

      <h2 className="section-title">Scrollable</h2>
      <div className="mb-6">
        <Button onClick={() => setOpenDialogId('4')}>
          Open fullscreen diaglog
        </Button>
        <Dialog
          isOpen={openDialogId === '4'}
          onClose={() => setOpenDialogId('')}
          onSubmit={() => {
            console.log({ openDialogId })
          }}
          size="sm"
        >
          <DialogHeader>Sizes: lg Dialog Title</DialogHeader>
          <DialogBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi
            inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum
            repudiandae commodi inventore magnam unde vero cupiditate molestiae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi
            inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum
            repudiandae commodi inventore magnam unde vero cupiditate molestiae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi
            inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum
            repudiandae commodi inventore magnam unde vero cupiditate molestiae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi
            inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum
            repudiandae commodi inventore magnam unde vero cupiditate molestiae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi
            inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum
            repudiandae commodi inventore magnam unde vero cupiditate molestiae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius fugiat illum repudiandae commodi inventore magnam unde vero
            cupiditate molestiae? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam eius fugiat illum repudiandae
          </DialogBody>
          <DialogFooter />
        </Dialog>
      </div>
    </div>
  )
}

export default Dialogs
