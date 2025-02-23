import * as express from 'express'
import * as multer from 'multer'
import { Request, Response, Router } from "express";
import { resolveController } from '../adapters/resolveController';

export const uploadRoute = Router();
import uploads from '../upload/upload';
import { AppError } from '../errors/AppError';

uploadRoute.get('/', resolveController(async(req: Request, res: Response) => {
    res.sendFile('index.html', { root: __dirname});
}))

uploadRoute.post('/',uploads.single('avatar'), resolveController(async(req: Request, res: Response)  => {
    if(!req.file) throw new AppError('file not found');

    res.send('Arquivo enviado com sucesso: ' + req.file.filename);
    
}))