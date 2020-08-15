A boilerplate that uses Hasura and Next.js to develop applications.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
## Deployment

### Frontend application
Click on the button below to deploy the frontend application on Vercel. You'll need to [sign up for a free Vercel account](https://vercel.com/signup/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fsondh0127%2Fnextjs-hasura-fullstack%2Ftree%2Fmaster%2Fnextjs&env=NEXT_PUBLIC_API_URL,NEXT_PUBLIC_WS_URL,DATABASE_URL,AUTH_PRIVATE_KEY,EMAIL_SERVER,EMAIL_FROM,NEXTAUTH_URL,GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET&project-name=nextjs-hasura-fullstack&repo-name=nextjs-hasura-fullstack)

### Nextjs config:

```
NEXT_PUBLIC_API_URL: ''

NEXT_PUBLIC_WS_URL: ''

DATABASE_URL: ''

AUTH_PRIVATE_KEY: ''

EMAIL_SERVER: ''

EMAIL_FROM: ''

NEXTAUTH_URL: ''

GOOGLE_CLIENT_ID: ''

GOOGLE_CLIENT_SECRET: ''
```

### Backend application

To deploy the backend application on Heroku press the button below. You must [register for a free Heroku account](https://signup.heroku.com/).

[![Deploy to
Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/sondh0127/nextjs-hasura-fullstack)

### Hasura config:

```
HASURA_GRAPHQL_ADMIN_SECRET: ''

HASURA_GRAPHQL_JWT_SECRET: ''
```

## Migration from development to heroku production.
### Prerequisites:
- [Hasura CLI](https://hasura.io/docs/1.0/graphql/manual/hasura-cli/install-hasura-cli.html)

Open console:
```
hasura console
```
Run migration:
```
hasura migrate apply --endpoint https://nextjs-hasura-fullstack-trello.herokuapp.com --admin-secret <secret>

hasura metadata apply --endpoint https://nextjs-hasura-fullstack-trello.herokuapp.com --admin-secret <secret>

```