import express, {NextFunction, Request, Response} from 'express'
import {createReadStream} from 'fs';
import {authMiddleware} from "./middleware/authMiddleware";
import path from "path";


export const fileRouter = express.Router()

fileRouter.get('/:file_path', authMiddleware, async (req, res, next) => {
  const filePath = path.join(__dirname, 'public') + '\\' + req.params['file_path']
  console.log(filePath)

  res.writeHead(200, {'Content-Type': 'text/plain'})

  const readStream = createReadStream(filePath);
  readStream.pipe(res)
})
