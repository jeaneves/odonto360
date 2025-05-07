import {db} from '../utils/db';
import { hashSenha, compareSenha } from '../utils/hash';
import { gerarToken } from '../utils/jwt';

export async function criarUsuario(nome: string, senha: string){
    const existe = await db.query('select * from usuarios where nome = $1',[nome]);
    console.log('chegou aqui');
    if(existe.rowCount! > 0){
        throw new Error('Usuario ja existe');
    }
  
    const senhaHash = await hashSenha(senha);
    const insereUsuario = await db.query(
        'insert into usuarios (nome,senha) values ($1,$2) returning id, nome',
        [nome, senhaHash]
    );
    return insereUsuario.rows[0];
}

export async function login(nome: string, senha: string){
    const usuario = await db.query('select * from usuarios where nome = $1',[nome]);
    const usuarioEncontrado =  usuario.rows[0];

    if (!usuarioEncontrado || !(await compareSenha(senha, usuarioEncontrado.senha))){
        throw new Error('Usuario ou senha invalidas');
    }

    const token = gerarToken({id: usuarioEncontrado.id, nome: usuarioEncontrado.nome});
    return{
        usuario:{
            id: usuarioEncontrado.id,
            nome: usuarioEncontrado.nome
        }, token
    }
}

export async function listarUsuarios(){
    const usuarios = await db.query('select id, nome from usuarios');
    return usuarios.rows;
}

export async function deletarUsuario(id: number){
    await db.query('delete from usuarios where id = $1',[id])
    return {mensagem: 'Usuario deletado com sucesso'};
}

export async function pegarUsuario(id: number){
    const usuario = await db.query('select id, nome from usuarios where id = $1',[id]);
    if(usuario.rowCount === 0){
        throw new Error('Usuario não encontrado');
    }
    return usuario.rows[0];
}
