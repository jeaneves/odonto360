import { Result } from "pg";
import { db } from "../utils/db";
import { hashSenha, compareSenha } from "../utils/hash";

function formatarDataBRISO(data: string): string {
    const [dia, mes, ano] = data.split('/');
    return `${ano}-${mes}-${dia}`; // Ex: "1993-12-18"
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
    await db.query('delete from funcionarios where id = $1',[id])
    return {mensagem: 'Usuario deletado com sucesso'};
}

interface FuncionarioInput{
    nome:string,
    sobrenome:string,
    cpf:string,
    data_nascimento:string,
    cargo:string,
    salario:number,
    data_admissao:string,
    ativo:boolean,
    usuario_id:number,

}

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