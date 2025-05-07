import jwt from 'jsonwebtoken';

const secreto = process.env.JWT_SECRET || "SEGREDO";

export function gerarToken(payload: any){
    return jwt.sign(payload, secreto,{ expiresIn: '4h'});
}

export function verificaToken(token: string){
    try{
        return jwt.verify(token, secreto);
    }catch(e){
        return null;
    }
}