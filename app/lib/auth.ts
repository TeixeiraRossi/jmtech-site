import { createHmac, timingSafeEqual } from "crypto"

function getSecret() {
  const secret = process.env.SESSION_SECRET
  if (!secret) throw new Error("SESSION_SECRET não definido")
  return secret
}

export function createSessionToken(): string {
  return createHmac("sha256", getSecret()).update("admin").digest("hex")
}

export function verifySessionToken(value: string): boolean {
  try {
    const expected = createSessionToken()
    return timingSafeEqual(Buffer.from(value), Buffer.from(expected))
  } catch {
    return false
  }
}
