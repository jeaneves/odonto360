import { Result } from "pg";
import { db } from "../utils/db";
import { hashSenha, compareSenha } from "../utils/hash";
import type { FuncionarioInput } from '../types/Funcionarios';

export async function criaFuncionario(data: FuncionarioInput){
    const{
      nome,
      sobrenome,
      cpf,
      data_nascimento,
      cargo,
      salario,
      data_admissao,
      ativo,
      usuario_id      
    } = data;
    
    const funcionario = await db.query('INSERT INTO funcionarios(nome, sobrenome, cpf, data_nascimento, cargo, salario, data_admissao, ativo, usuario_id)VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',[nome, sobrenome, cpf, data_nascimento, cargo, salario, data_admissao, ativo, usuario_id]);
    return funcionario.rows[0];
}

export async function listarFuncionarios(){
    const funcionarios = await db.query('select * from funcionarios');
    return funcionarios.rows;
}

export async function buscaFuncionario(id: number){
    const funcionario = await db.query('select * from funcionarios where id = $1',[id]);
    if (funcionario.rowCount === 0){
        throw new Error('Funcionario não encontrado');
    }
    return funcionario.rows;
}

export async function deletaFuncionario(id: number){
    const funcionario = await db.query('delete from funcionarios where id = $1',[id])
    if (funcionario.rowCount === 0){
        throw new Error('Funcionario não encontrado');
    }
    return funcionario.rows;
    //return {mensagem: 'Usuario deletado com sucesso'};
}