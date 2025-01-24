import { env } from './environment'
const MONGODB_URI = env.MONGODB_URI
const DATABASE_NAME = env.DATABASE_NAME

const { MongoClient, ServerApiVersion } = require('mongodb')

let trelloDatabaseInstance = null
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
}
)

//kết nối tới db
export const CONNECT_DB = async () => {
  await client.connect()
  trelloDatabaseInstance = client.db(DATABASE_NAME)
}
//GET_DB để tận dụng lại connection, tránh connect-close nhiều lần
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database first!')
  return trelloDatabaseInstance
}
