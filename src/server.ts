import express, { Request, Response, NextFunction } from 'express'
import path from "path";
import { createConnection } from 'typeorm'
import { authRouter } from './auth'
import { userRouter } from './user'
import { handleError } from "./ErrorHandler";
import {fileRouter} from "./fileRouter";

async function startServer() {
  const app = express()
  app.use(express.json())
  app.use(authRouter)
  console.log(path.join(__dirname, 'public'))
  app.use(express.static(path.join(__dirname, 'public')))
  app.use('/file',fileRouter)
  app.use('/user', userRouter)
  app.use(handleError)
  await createConnection()
  console.log('db connected')
  app.listen(3000, () => {
    console.log('Server started')
  })
}

startServer().catch((e) => {
  console.error(e)
})
