import { Router } from 'express';
import { UserController } from '../controllers/usersController';
import { handlerAsync } from 'utils/handler';

const router = Router();


/**
 * @swagger
 * /user:
 *   post:
 *     summary: register user
 *     requestBody:
 *       required: true
 *       description: ""
 *       content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *     tags:
 *       - user
 *     responses:
 *       200:
 *         description: Success
 */
router.post('/', handlerAsync(UserController.registerUser));

//
export default router;
