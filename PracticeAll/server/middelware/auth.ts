import { NextFunction, Request, Response } from "express"
import Jwt from "jsonwebtoken"
import { SECRET } from "../route/userRoute"


export const authenticateJwt = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        Jwt.verify(token, SECRET, (err, payload) => {
            if (err) {
                return res.status(403);
            }
            if (!payload) {
                return res.status(403);
            }
            if (typeof payload === 'string') {
                return res.status(403)
            }

            req.headers['userId'] = payload.id
            next()
        })
    } else {
        return res.status(403);
    }
}