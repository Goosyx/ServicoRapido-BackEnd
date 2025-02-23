import express, { Request, Response } from "express";

export const mainRouter = express.Router();

mainRouter.get('/', (_: Request, res: Response) => {
    res.json({
        project: 'Servico_Rapido_bck',
        accountable: {
            name: "Marcos Paulo",
            contact: "marcospaulo@alunos.utfpr.edu.br",

            name1: "Sergio Murilo",
            contact1: "sergiovalentini@alunos.utfpr.edu.br",

            name2: "Alex Magalhaes",
            contact2: "alexjunior.2023@alunos.utfpr.edu.br"
        },
        devs: [
        {
            name: "Marcos Paulo",
            contact: "marcospaulo@alunos.utfpr.edu.br",

            name1: "Sergio Murilo",
            contact1: "sergiovalentini@alunos.utfpr.edu.br",

            name2: "Alex Magalhaes",
            contact2: "alexjunior.2023@alunos.utfpr.edu.br"
        }
        ]
    })
})