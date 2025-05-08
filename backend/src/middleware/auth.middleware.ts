import { Request, Response, NextFunction  } from "express";
import { verificaToken } from "../utils/jwt";

export function autenticarUsuario(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.status(401).json({ mensagem: 'Token não encontrado'});
        return; //returna para evitar continuar o processamento

    }

    try {
        const usuario = verificaToken(token);
        (req as any).usuario = usuario; 
        next(); //segue para o proximo middleware ou rota
    } catch (err) {
        res.status(403).json({ mensagem: 'Token invalido'});
        return; 
        
    }
}