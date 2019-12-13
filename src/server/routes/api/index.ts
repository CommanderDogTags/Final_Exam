import { Router } from 'express';
import { tokenMiddleware } from '../../middleware/auth-checkpoints';

import booksRouter from './books';
import categoriesRouter from './categories';

const router = Router();

router.use(tokenMiddleware);

router.use('/books', booksRouter);
router.use('/categories', categoriesRouter);

export default router;