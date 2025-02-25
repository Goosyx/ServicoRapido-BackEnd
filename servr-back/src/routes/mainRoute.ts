import express, { Request, Response } from "express";

export const mainRouter = express.Router();

mainRouter.get('/', (_: Request, res: Response) => {
    res.json({
        project: 'servr_backend',
        accountable: {
            name: "Alex",
            contact: "alex_salv@outlook.com"
        },
        devs: [
            {
                name: "Alex",
                contact: "alex_salv@outlook.com"
            },
            {
                name: "Marcos Paulo",
                contact: "marcos_map2000@gmail.com"
            },
            {
                name: "Sergio Murilo",
                contact: "sergiomurilo-cardoso@hotmail.com"
            }
        ]
    })
})