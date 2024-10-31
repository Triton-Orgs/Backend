import { Request, Response } from 'express';
import User from '../models/userModel';

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();

  res.status(200).json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = new User({
    name, email
  });

  await user.save();

  res.status(201).json(user);
}

export const getUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;

  const user = await User.findById(userId);
  if (!user) {
    res.status(404).json({ message: "User Not Found" });
  }

  res.status(200).json(user);
}