import {Response, Request, NextFunction } from "express";

export class ErrorHandler extends Error {
  private statusCode;
  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleError = (err: any, req: Request, res: Response, next: NextFunction) => {
  const { statusCode, message } = err
  res.status(statusCode)
  res.json({
    statusCode: statusCode || 500,
    message
  });
}

