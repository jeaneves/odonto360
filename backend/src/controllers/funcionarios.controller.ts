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

export async function listarFuncionarios(req: Request, res: Response){
    const funcionarios = await funcionarioService.listarFuncionarios();
    res.json(funcionarios);
}

export async function buscaFuncionario(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const funcionario = await funcionarioService.buscaFuncionario(id);
        res.json(funcionario);
        
    } catch (error) {
        res.status(404).json({mensagem: 'Funcionario não encontrado'});        
    }
    
}

export async function deletaFuncionario(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const funcionario = await funcionarioService.deletaFuncionario(id);
        res.json(funcionario);
        
    } catch (error) {
        res.status(404).json({mensagem: 'Funcionario não encontrado'});        
    }
    
}