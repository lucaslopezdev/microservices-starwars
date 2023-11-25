import dotenv from "dotenv"
dotenv.config()

// tambien sirve < import('dotenv/config.js') >

export const MONGO_URI = process.env.MONGO_URI
