/* eslint-disable no-console */

import express from 'express'
import { CONNECT_DB } from './config/mongodb'
import { env } from './config/environment'
import { APIs_v1 } from '~/routes/v1'

const START_SERVER = () => {
  const app = express()

  const hostname = env.APP_HOST
  const port = env.APP_PORT

  // app.get('/', (req, res) => {
  //   // Test Absolute import mapOrder
  //   console.log(`${process.env}`)
  //   res.end('<h1>Hello World!</h1><hr>')
  // })

  app.use('/v1', APIs_v1)

  const server = app.listen(port, hostname, () => {
    console.log(`Hello ${env.AUTHOR}, I am running at ${ hostname }:${ port }/`)
  })
  //tìm hiểu và cài WSL để dùng exitHook để ngắt kết nối MongoDB tới backend
  // exitHook(() => {
  //   console.log('Exit app')
  // })
  // Đăng ký hook thoát
  // Lắng nghe tín hiệu thoát để in ra 'Exit app'
  process.on('SIGINT', () => {
    console.log('\nExit app')
    server.close(() => {
      console.log('HTTP server closed')
      process.exit(0) // Thoát ứng dụng
    })
  })
}

CONNECT_DB()
  .then(() => console.log('Connected to MongoDB Cloud Atlas!'))
  .then(() => START_SERVER())
  .catch(error => {
    console.error(error)
    process.exit(0)
  })