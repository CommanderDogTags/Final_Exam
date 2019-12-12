import { RequestHandler, Request } from 'express';
import * as passport from 'passport';

export const tokenMiddleware: RequestHandler = (req: ReqUser, res, next) => {
    return passport.authenticate('bearer', (err, user) => {
        if(user) req.user = user;
        return next();
    })(req, res, next);
};

export const isAdmin: RequestHandler = (req: ReqUser, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        return next();
    }
}

interface ReqUser extends Request {
    user: {
        id: number;
        role: string;
    }
}