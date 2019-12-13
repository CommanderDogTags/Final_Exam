import { Router } from 'express';
import DB from '../../db';
import { isAdmin } from '../../middleware/auth-checkpoints';

const router = Router(); 

router.get('/', async (req, res, next) => {
    try {
        let result = await DB.books.getAll();
        res.send(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/:id', isAdmin, async (req, res, next) => {
    try {
        let result = await DB.books.getOne(req.params.id);
        res.send(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.delete('/:id', isAdmin, async (req, res) => {
    try {
        let result = await DB.books.deleteBook(req.params.id);
        res.json(result);
    } catch (e) {
        console.log(e)
        res.status(500);
    }
})

router.post('/', isAdmin, async (req, res) => {
    try {
        let result = await DB.books.postBook(req.body.title, req.body.author, req.body.price, req.body.categoryid);
        res.json(result);
    } catch (e) {
        console.log(e)
        res.sendStatus(500);
    }
})

router.put('/:id', isAdmin, async (req, res) => {
    try {
        let result = await DB.books.editBook(req.body.title, req.body.author, req.body.price, req.body.categoryid, req.params.id)
        res.json(result)
    } catch (e) {
        console.log(e)
        res.status(500);
    }
})

export default router;