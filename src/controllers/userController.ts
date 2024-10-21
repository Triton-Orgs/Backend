import { Request, Response, NextFunction } from "express";
import User from '../models/userModel';

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = [{
    name: "Ramtin",
    email: "ramtin@gmail.com"
  }]

  res.status(200).json(users);
};