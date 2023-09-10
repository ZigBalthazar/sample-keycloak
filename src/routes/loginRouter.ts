import { Router } from 'express';
import { handlerAsync } from 'utils/handler';
import { LoginController } from 'controllers/loginController';

const router = Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: login user
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
 *                 password:
 *                   type: string
 *     tags:
 *       - login
 *     responses:
 *       200:
 *         description: Success
 */
router.post('/', handlerAsync(LoginController.loginUser));

//
export default router;
