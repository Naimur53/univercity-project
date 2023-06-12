import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
let server: Server

async function bootstrap() {
  try {
    server = app.listen(config.port, () => {
      console.info(`Application  listening on port ${config.port}`)
    })
    await mongoose.connect(config.database_url as string)
    console.log(`🛢   Database is connected successfully`)
  } catch (err) {
    console.error('Failed to connect database', err)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()
