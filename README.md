A boilerplate that uses Hasura and Next.js to develop applications.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

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