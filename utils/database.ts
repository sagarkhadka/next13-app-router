import mongoose, { ConnectOptions } from 'mongoose'

interface MongoDBOptions extends ConnectOptions {
  useNewUrlParser: boolean
  useUnifiedTopology: boolean
}

interface dbTypes extends MongoDBOptions {
  dbName: string
}

let isConnected = false

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('DB conntected')
    return
  }

  try {
    const options: dbTypes = {
      dbName: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true
    }

    await mongoose.connect(process.env.MONGODB_URI as string, options)

    isConnected = true
    console.log('DB conntected')
  } catch (error) {
    console.log(error)
  }
}
