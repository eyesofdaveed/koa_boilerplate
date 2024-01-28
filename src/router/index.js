import Router from 'koa-router';

import { basePreffix } from '../config/index.js';
import errorHandling from '../middlewares/errorHandling.js';
import authRouter from './auth.js';
import caseRouter from './case.js';
import todoRouter from './todo.js';

const router = new Router({
  prefix: basePreffix,
});

router.use(errorHandling);
router.use('/auth', authRouter.routes(), authRouter.allowedMethods());
router.use('/cases', caseRouter.routes(), caseRouter.allowedMethods());
router.use('/todos', todoRouter.routes(), todoRouter.allowedMethods());
// route for the Health check from Cloudflare Monitor
router.get('/health-check', (ctx) => {
  ctx.status = 200;
  ctx.body = {};
});

export default router;