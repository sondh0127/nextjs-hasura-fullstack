import React, { useCallback, useEffect, useMemo, useState } from 'react'

import BalanceIcon from '../../icons/BalanceIcon'
import ClientIcon from '../../icons/ClientIcon'
import ContactIcon from '../../icons/ContactIcon'
import {
  ActionButtons,
  ButtonIcon,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from './components'
import {
  DotsHorizontalOutline,
  DotsHorizontalSolid,
  SearchSolid,
  XSolid,
} from './components/heroicons'

const Cards: React.FC = ({ children }) => {
  const src =
    'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80'

  return (
    <div className="container grid mx-auto">
      <h1 className="page-title">Cards</h1>
      <h2 className="section-title">Simple</h2>
      <div className="grid grid-cols-1 gap-3 mb-6 md:grid-cols-3">
        <Card>
          <CardBody>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
        </Card>
      </div>
      <h2 className="section-title">Basic</h2>
      <div className="grid grid-cols-1 gap-3 mb-6 md:grid-cols-3">
        <Card>
          <CardHeader>Normal Card</CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter className="justify-end">
            <ActionButtons />
          </CardFooter>
        </Card>
      </div>
      <h2 className="section-title">Header</h2>
      <div className="grid grid-cols-1 gap-3 mb-6 md:grid-cols-3">
        <Card>
          <CardHeader title="Card Title" />
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            title="Card Title"
            subtitle="Card Subtitle"
            action={<ButtonIcon icon={DotsHorizontalSolid} color="light" />}
          ></CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            title="Card Title"
            subtitle="Card Subtitle"
            action={<ButtonIcon icon={XSolid} color="light" />}
          ></CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            title="Card Title"
            subtitle="Card Subtitle"
            action={<ButtonIcon icon={SearchSolid} color="light" />}
          ></CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
        </Card>
      </div>

      <h2 className="section-title">Footer</h2>
      <div className="grid grid-cols-1 gap-3 mb-6 md:grid-cols-3">
        <Card>
          <CardHeader title="Card Title" />
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter className="justify-start">
            <ActionButtons />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter className="justify-end">
            <ActionButtons />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader
            title="Card Title"
            subtitle="Card Subtitle"
            action={<ButtonIcon icon={DotsHorizontalSolid} color="light" />}
          ></CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter>
            <ActionButtons block />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader
            title="Card Title"
            subtitle="Card Subtitle"
            action={<ButtonIcon icon={SearchSolid} color="light" />}
          ></CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter className="justify-end" transparent>
            <ActionButtons />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader
            title="Card Title"
            subtitle="Card Subtitle"
            action={<ButtonIcon icon={XSolid} color="light" />}
          ></CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter className="justify-end">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </CardFooter>
        </Card>
      </div>

      <h2 className="section-title">Image</h2>
      <div className="grid grid-cols-1 gap-3 mb-6 md:grid-cols-3">
        <Card>
          <Image
            src={src}
            alt="Woman paying for a purchase"
            height="200px"
            fit="cover"
          />
          <CardHeader title="Card Title" />
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter className="justify-start">
            <ActionButtons />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter className="justify-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </CardFooter>
          <Image
            src={src}
            alt="Woman paying for a purchase"
            height="200px"
            fit="cover"
          />
        </Card>
        <Card>
          <CardHeader
            title="Card Title"
            subtitle="Card Subtitle"
            action={<ButtonIcon icon={DotsHorizontalSolid} color="light" />}
          ></CardHeader>
          <Image
            src={src}
            alt="Woman paying for a purchase"
            height="200px"
            fit="cover"
          />
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter>
            <ActionButtons block />
          </CardFooter>
        </Card>

        <Card className="grid grid-cols-3">
          <Image
            src={src}
            alt="Woman paying for a purchase"
            height="100%"
            fit="cover"
          />
          <div className="col-span-2">
            <CardHeader
              title="Card Title"
              subtitle="Card Subtitle"
              action={<ButtonIcon icon={SearchSolid} color="light" />}
            ></CardHeader>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </CardBody>
            <CardFooter>
              <ActionButtons block />
            </CardFooter>
          </div>
        </Card>
        <Card className="grid grid-cols-3">
          <div className="col-span-2">
            <CardHeader
              title="Card Title"
              subtitle="Card Subtitle"
              action={<ButtonIcon icon={SearchSolid} color="light" />}
            ></CardHeader>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </CardBody>
            <CardFooter>
              <ActionButtons block />
            </CardFooter>
          </div>
          <Image
            src={src}
            alt="Woman paying for a purchase"
            height="100%"
            fit="cover"
          />
        </Card>
        <Card className="grid grid-cols-3">
          <div className="col-span-2">
            <CardHeader
              title="Card Title"
              subtitle="Card Subtitle"
              action={<ButtonIcon icon={SearchSolid} color="light" />}
            ></CardHeader>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </CardBody>
            <CardFooter>
              <ActionButtons block />
            </CardFooter>
          </div>
          <Image
            src={src}
            alt="Woman paying for a purchase"
            height="100%"
            fit="cover"
          />
        </Card>
      </div>

      <h2 className="section-title">Colors</h2>
      <div className="grid grid-cols-1 gap-3 mb-6 md:grid-cols-3">
        <Card color="success">
          <CardHeader title="Card Title" />
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter className="justify-start">
            <ActionButtons />
          </CardFooter>
        </Card>
        <Card color="danger">
          <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter className="justify-end">
            <ActionButtons />
          </CardFooter>
        </Card>
        <Card color="dark">
          <CardHeader
            title="Card Title"
            subtitle="Card Subtitle"
            action={<ButtonIcon icon={DotsHorizontalSolid} color="light" />}
          ></CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter>
            <ActionButtons block />
          </CardFooter>
        </Card>
      </div>

      <h2 className="section-title">Loading</h2>
      <div className="grid grid-cols-1 gap-3 mb-6 md:grid-cols-3">
        <Card isLoading>
          <CardHeader title="Card Title" />
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter className="justify-start">
            <ActionButtons />
          </CardFooter>
        </Card>

        <Card color="success" isLoading>
          <CardHeader title="Card Title" />
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter className="justify-start">
            <ActionButtons />
          </CardFooter>
        </Card>
        <Card color="danger" isLoading>
          <CardHeader title="Card Title" subtitle="Card Subtitle"></CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter className="justify-end">
            <ActionButtons />
          </CardFooter>
        </Card>
        <Card color="dark" isLoading>
          <CardHeader
            title="Card Title"
            subtitle="Card Subtitle"
            action={<ButtonIcon icon={DotsHorizontalSolid} color="light" />}
          ></CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </CardBody>
          <CardFooter>
            <ActionButtons block />
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Cards
