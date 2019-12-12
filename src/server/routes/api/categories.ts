import { Router } from 'express';
import DB from '../../db';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const categories:any = await DB.categories.all();
        res.json(categories);
    } catch (e) {
        console.log(e)
        res.sendStatus(500);
    }
})

export default router;