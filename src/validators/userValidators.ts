import { body, param } from 'express-validator';

export const createUserValidator = [
  body('name').isString().withMessage('Name must be a string'),
  body('email').isEmail().withMessage('Email must be valid')
];

export const getUserByIdValidator = [
  param('id').isMongoId().withMessage('Invalid user ID')
]