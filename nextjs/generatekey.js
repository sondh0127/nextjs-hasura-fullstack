/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function generateKeys() {
  try {
    /* -------------------------- Copy env.example  ------------------------- */

    const data = fs.readFileSync('.env.example', 'utf8')
    fs.writeFileSync('.env.local', data)
    console.log(
      `Copied .env.example to .env. 👌\n` +
        `Please create a Google OAuth Client( https://console.developers.google.com/apis/credentials/oauthclient) and copy the credentials to GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in your .env\n`,
    )

    /* -------------------------- Generate keys --------------------------- */

    const { stdout: privateKey } = await exec('openssl genrsa 2048')
    var randomfn = './' + Math.random().toString(36).substring(7)
    fs.writeFileSync(randomfn, privateKey)
    const { stdout: publicKey } = await exec(
      'openssl rsa -in ' + randomfn + ' -pubout',
    )
    fs.unlinkSync(randomfn)
    /* --------------------------------- Config ----------------------------- */
    const AUTH_PRIVATE_KEY = {
      type: 'RS512',
      key: privateKey,
    }

    const frontendEnv =
      `AUTH_PRIVATE_KEY='${JSON.stringify(AUTH_PRIVATE_KEY)}'\n` +
      `HASURA_GRAPHQL_ADMIN_SECRET=secret@123\n`

    const HASURA_GRAPHQL_JWT_SECRET = {
      type: 'RS512',
      key: publicKey,
    }

    const outputEnv =
      frontendEnv +
      `HASURA_GRAPHQL_JWT_SECRET='${JSON.stringify(
        HASURA_GRAPHQL_JWT_SECRET,
      )}'\n`

    fs.writeFileSync('.env.key', outputEnv)

    const logString =
      'Secret keys was generated in .env.key 👌\n' +
      'Edit AUTH_PRIVATE_KEY, HASURA_GRAPHQL_ADMIN_SECRET in your local nextjs/.env file\n' +
      'Copy HASURA_GRAPHQL_JWT_SECRET, HASURA_GRAPHQL_ADMIN_SECRET to use in hasura/docker-compose.yml or in production config!\n'
    console.log(logString)
  } catch (err) {
    console.error(err)
  }
}
generateKeys()
