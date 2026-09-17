import "dotenv/config"

export const SESSION_SECRET = process.env.SESSION_SECRET || ""
export const PORT = process.env?.PORT || 4000
export const DATABASE_URL = process.env?.DATABASE_URL || ""
