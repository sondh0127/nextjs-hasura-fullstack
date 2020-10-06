<p align="center">
  <img src="https://user-images.githubusercontent.com/62163604/93007361-872b1780-f592-11ea-9d87-c84794a2600c.png" alt="Logo"/>
</p>

A fullstack boilerplate which uses Hasura GraphQL Engine and Next.js to develop applications.

<p align="center">
  <a href="https://twitter.com/sondh0127">
    <img alt="Twitter: Son Do Hong" src="https://img.shields.io/twitter/follow/sondh0127.svg?style=social" target="_blank" />
  </a>
</p>

## Content

- [Content](#content)
- [TechStack Features](#techstack-features)
- [Requirements](#requirements)
- [Development Step](#development-step)
  - [1. **Clone the application**](#1-clone-the-application)
  - [2. **Run a generateKeys.js (present in root directory)**](#2-run-a-generatekeysjs-present-in-root-directory)
  - [3. **Start `Hasura GraphQL server` with docker-compose**](#3-start-hasura-graphql-server-with-docker-compose)
  - [4. **Start `Hasura console`**](#4-start-hasura-console)
  - [5. **Open another terminal and install dependencies for NextJs application**](#5-open-another-terminal-and-install-dependencies-for-nextjs-application)
  - [6. **Create Google client credentials**](#6-create-google-client-credentials)
  - [7. **Start the NextJs application**](#7-start-the-nextjs-application)
- [**Deployment**](#deployment)
  - [**Heroku for Hasura application**](#heroku-for-hasura-application)
  - [Hasura Config:](#hasura-config)
  - [**Get postgres database url at heroku**](#get-postgres-database-url-at-heroku)
- [`](#)
  - [**Vercel for NextJs application**](#vercel-for-nextjs-application)
  - [NextJs Config (Similar with.env)](#nextjs-config-similar-withenv)
  - [Example: With your domain is `domainname.herokuapp.com`](#example-with-your-domain-is-domainnameherokuappcom)
- [Migration flow from development to production.](#migration-flow-from-development-to-production)
  - [Prerequisites:](#prerequisites)
- [Custom logic with NextJs API route (serverless)](#custom-logic-with-nextjs-api-route-serverless)
- [License](#license)

---

## TechStack Features

This boilerplate is built using the following technologies:

1. [NextJs](https://nextjs.org/) (The React Framework
   for Production)
2. [Hasura](https://hasura.io/) (GraphQL engine: supports GraphQL Query, Mutation and Subscription out of the box.)
3. [GraphQL](https://graphql.org/) (Flexible query language for API layer ~~ REST alternative)
4. [NextAuth](https://next-auth.js.org/) (Authentication for NextJs power by NextJs [API Routes](https://nextjs.org/docs/api-routes/introduction))
5. [Apollo Client](https://www.apollographql.com/docs/react/) (Comprehensive Graphql Client - Automatically update the UI while fetching, caching, and updating the application state.)
6. [GraphQL Code Generator](https://graphql-code-generator.com/) (Generate react hooks with fully typescript for all your graphql query)
7. [Tailwindcss](https://tailwindcss.com/) (A utility-first CSS framework)
8. [Retail UI](https://github.com/sondh0127/retail-ui) (UI libary power by tailwindcss)
9. [Typescript](https://www.typescriptlang.org/) (Typed JavaScript at Any Scale)

---

## Requirements

1. [Node.js](https://nodejs.org/) Recommended Install via [nvm](https://github.com/nvm-sh/nvm)
2. [npm](https://www.npmjs.com/) Yeah! for `npm install -g yarn`
3. [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/)
4. [Hasura CLI](https://hasura.io/docs/1.0/graphql/core/hasura-cli/index.html)

---

## Development Step

### 1. **Clone the application**

```sh
git clone https://github.com/sondh0127/nextjs-hasura-fullstack
```

### 2. **Run a generateKeys.js (present in root directory)**

```sh
node generateKeys.js
```

> It will create `hasura/.env` and `nextjs/.env` files which used to provide authentication and security for the app

```
AUTH_PRIVATE_KEY  # Private key
HASURA_GRAPHQL_JWT_SECRET  # Public key
HASURA_GRAPHQL_ADMIN_SECRET # Hasura console password
```
For Backend:

### 3. **Start `Hasura GraphQL server` with docker-compose**

Starting Docker by using docker-compose which will start our backend app and database services.

```sh
cd hasura/
docker-compose up
```

If everything goes well, it’ll be up and running on http://localhost:8080/v1/graphql.

### 4. **Start `Hasura console`**
The `console` will help us automatically create migration and metadata for any change. [Readmore](https://hasura.io/docs/1.0/graphql/core/hasura-cli/hasura_console.html)

Require [Hasura CLI](#requirements)

Open console on another terminal
```sh
cd hasura/
hasura console --admin-secret <HASURA_GRAPHQL_ADMIN_SECRET>
```
The console is running on http://localhost:9695.

For Frontend:
### 5. **Open another terminal and install dependencies for NextJs application**

```sh
cd nextjs/ && yarn
```

### 6. **Create Google client credentials**

Create a new [Google OAuth Client](https://console.developers.google.com/apis/credentials/oauthclient) and copy the credentials (Client ID and Client Secret) into `.env` file.

```sh
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

> Config Authorised redirect URIs:

```
http://localhost:3000/api/auth/callback/google
https://domailname.app/api/auth/callback/google
```

### 7. **Start the NextJs application**

```sh
yarn dev
```

The above command will start the application on [http://localhost:3000/](http://localhost:3000). It also watching for the change of your GraphQL to generate new code by [GraphQL Code Generator](https://graphql-code-generator.com/)

---

## **Deployment**

The production ready can be done with Vercel and Heroku platforms by following the instruction. (Free hosting)

---

### **Heroku for Hasura application**

To deploy the backend application on Heroku press the button below. You must [register for a free Heroku account](https://signup.heroku.com/).

[![Deploy to
Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/sondh0127/nextjs-hasura-fullstack)

### Hasura Config:

> From heroku dashboard: Go to `Settings` => [`Config Vars`] Choose `Reveal Config Vars` => Add the following config

```env
HASURA_GRAPHQL_ADMIN_SECRET="secret@123"

HASURA_GRAPHQL_JWT_SECRET: ''
```

> Calm! You just need to wait Heroku to update config for a while

### **Get postgres database url at heroku**

> From heroku dashboard: Go to `Resources` => `Heroku postgres` addons. In new windows: `Settings` => `View Credentials`... Copy your `DATABASE_URL` from `URI` field with sample format:
> `postgres://postgres:@localhost:5432/postgres`

## `

### **Vercel for NextJs application**

Click on the button below to deploy the frontend application on Vercel. You'll need to [sign up for a free Vercel account](https://vercel.com/signup/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fsondh0127%2Fnextjs-hasura-fullstack%2Ftree%2Fmaster%2Fnextjs&env=NEXT_PUBLIC_API_URL,NEXT_PUBLIC_WS_URL,DATABASE_URL,NEXTAUTH_URL,GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,AUTH_PRIVATE_KEY&project-name=nextjs-hasura-fullstack&repo-name=nextjs-hasura-fullstack)

### NextJs Config (Similar with.env)

### Example: With your domain is `domainname.herokuapp.com`

Get your [`DATABASE_URL`](#get-postgres-database-url-at-heroku)

```
NEXT_PUBLIC_API_URL=https://domainname.herokuapp.com/v1/graphql

NEXT_PUBLIC_WS_URL=wss://domainname.herokuapp.com/v1/graphql

DATABASE_URL=postgres://postgres:@localhost:5432/postgres

NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=""

GOOGLE_CLIENT_SECRET=""

AUTH_PRIVATE_KEY=""

```

---

## Migration flow from development to production.

### Prerequisites:

- [Hasura CLI](https://hasura.io/docs/1.0/graphql/manual/hasura-cli/install-hasura-cli.html)

Open console:

```
hasura console --admin-secret <HASURA_GRAPHQL_ADMIN_SECRET>
```

Run migration with metadata:

```sh
hasura migrate apply --endpoint <YOUR_HASURA_APP_ENDPOINT> --admin-secret <HASURA_GRAPHQL_ADMIN_SECRET>

hasura metadata apply --endpoint <YOUR_HASURA_APP_ENDPOINT> --admin-secret <HASURA_GRAPHQL_ADMIN_SECRET>
```

Example:

```sh
hasura migrate apply --endpoint https://nextjs-hasura-fullstack-trello.herokuapp.com --admin-secret secret@123

hasura metadata apply --endpoint https://nextjs-hasura-fullstack-trello.herokuapp.com --admin-secret secret@123
```

---

## Custom logic with NextJs API route (serverless)

> TODO

---

heroku login
heroku container:login
heroku container:push web -a appname
heroku container:release web -a appname
heroku open

vercel

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
