import { Request, Response } from "express";
import * as funcionarioService from '../services/funcionario.service';

export async function criaFuncionario(req: Request, res: Response){
    try {
        const funcionario = await funcionarioService.criaFuncionario(req.body);
        res.status(201).json(funcionario);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
}