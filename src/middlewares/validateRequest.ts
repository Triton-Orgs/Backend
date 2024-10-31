import { ContextRunner, ValidationChain, validationResult } from 'express-validator';
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Middleware } from 'express-validator/lib/base';

const validateRequest: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
  next();
}

export const validateWith = (validators: (ValidationChain | (Middleware & ContextRunner))[])=> [
  ...validators,
  validateRequest
]