import { Router } from 'express';
import { UserController } from '../controllers/usersController';
import { handlerAsync } from 'utils/handler';
import { CheckController } from 'controllers/checkController';
import { authenticate } from 'middlewares/auth';

const router = Router();


/**
 * @swagger
 * /check/public:
 *   get:
 *     summary: public route
 *     tags:
 *       - routes
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/public', handlerAsync(CheckController.publicRoute));

/**
 * @swagger
 * /check/secured:
 *   get:
 *     summary: secured route
 *     tags:
 *       - routes
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/secured', authenticate ,handlerAsync(CheckController.securedRoute));
export default router;
