import { Session as AuthSession } from 'next-auth/client'

export default interface Session extends AuthSession {
  id?: number
  token?: string
}

export type SessionProp = {
  session: Session | null
}
