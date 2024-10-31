import { Router } from 'express';
import {
  createUser,
  getUserById,
  getUsers,
} from '../controllers/userController';
import { getUserByIdValidator } from '../validators/userValidators';
import { validateWith } from '../middlewares/validateRequest';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: API endpoints for managing users
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - _id
 *         - name
 *         - email
 *       properties:
 *         _id:
 *           type: string
 *           description: Auto-generated ID of the user
 *         name:
 *           type: string
 *           description: Name of the user
 *         email:
 *           type: string
 *           description: Email address of the user
 *       example:
 *         _id: "60d0fe4f5311236168a109ca"
 *         name: "John Doe"
 *         email: "john.doe@example.com"
 *     UserInput:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *       example:
 *         name: "Jane Doe"
 *         email: "jane.doe@example.com"
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve a list of users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 */
router.get('/', getUsers);

router.get('/:id', validateWith(getUserByIdValidator), getUserById);

router.post('/', createUser);

export default router;
