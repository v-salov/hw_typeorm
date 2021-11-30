import {NextFunction, Request, Response} from "express";
import jwt from 'jsonwebtoken'
import {Config} from "../config";
import {ErrorHandler} from "../ErrorHandler";


export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  if (req.method === "OPTIONS") next()

  try {
    // @ts-ignore
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      throw new ErrorHandler(403, 'Пользователь не авторизован')
    }
    const decodedData = jwt.verify(token, Config.secretKey)
    // @ts-ignore
    req.user = decodedData
    next()
  } catch (e) {
    throw new ErrorHandler(403, 'Пользователь не авторизован')
  }
};
