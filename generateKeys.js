/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function generateKeys() {
  try {
    /* -------------------------- Copy env.example  ------------------------- */

    const frontendExample = fs.readFileSync('nextjs/.env.example', 'utf8')
    console.log(
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

    const HASURA_GRAPHQL_JWT_SECRET = {
      type: 'RS512',
      key: publicKey,
    }

    const frontendEnv = frontendExample + `\n` +
      `AUTH_PRIVATE_KEY='${JSON.stringify(AUTH_PRIVATE_KEY)}'\n` +
      `HASURA_GRAPHQL_ADMIN_SECRET=secret@123\n`

    const backendEnv =
      `HASURA_GRAPHQL_ADMIN_SECRET=secret@123\n` +
      `HASURA_GRAPHQL_JWT_SECRET='${JSON.stringify(HASURA_GRAPHQL_JWT_SECRET,)}'\n`

    fs.writeFileSync('nextjs/.env', frontendEnv)
    fs.writeFileSync('hasura/.env', backendEnv)

    const logString =
      'Secret keys was generated in nextjs/.env and hasura/.env\n'
    console.log(logString)
  } catch (err) {
    console.error(err)
  }
}
generateKeys()
