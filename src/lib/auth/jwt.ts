import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.NEXTAUTH_SECRET!
const MAX_AGE = 60 * 60 * 24 // 1 day

export interface JWTPayload {
  sub: string
  email: string
  role?: string
}

export const signJWT = (payload: JWTPayload): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: MAX_AGE,
  })
}

export const verifyJWT = (token: string): JWTPayload => {
  return jwt.verify(token, JWT_SECRET) as JWTPayload
}