import { Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response) => {
  const users = [
    {
      name: 'Ramtin',
      email: 'ramtin@gmail.com',
    },
  ];

  res.status(200).json(users);
};
