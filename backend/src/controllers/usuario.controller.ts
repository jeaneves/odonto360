import { Request, Response } from 'express';
import * as usuarioService from '../services/usuario.service';



export async function criarUsuario(req: Request, res: Response){
    
    try {
        const usuario = await usuarioService.criarUsuario(req.body.nome, req.body.senha);
        res.status(201).json(usuario);
       
    }catch(err: any){
        res.status(400).json({mensagem: err.messagem});
    }
}

export async function login(req: Request, res: Response){
    
    try {
        const resultado = await usuarioService.login(req.body.nome, req.body.senha);
        res.json(resultado);       
    } catch (err: any) {
        res.status(401).json({ mensagem: err.message});
    }
}

export async function listarUsuarios(req:Request, res: Response){
    const usuarios = await usuarioService.listarUsuarios();
    res.json(usuarios);
}

export async function deletarUsuario(req: Request, res: Response){
    try {
        const id = parseInt(req.params.id);
        const usuario = await usuarioService.deletarUsuario(id);
        res.json({mensagem: 'Usuario deletado com sucesso'});
    } catch (error) {
        res.status(404).json({mensagem: 'Usuario não encontrado'});
        
    }
}

export async function pegarUsuario(req: Request, res: Response){
    try {
        const id = parseInt(req.params.id);
        const usuario = await usuarioService.pegarUsuario(id)
        res.json(usuario);
    } catch (error) {
        res.status(404).json({mensagem: 'Usuario não encontrado'});        
    }
}