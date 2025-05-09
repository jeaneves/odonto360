import { Router } from "express";
import * as funcionarioController from '../controllers/funcionarios.controller';
import { autenticarUsuario } from "../middleware/auth.middleware";

const router = Router();

router.post('/criafuncionario',autenticarUsuario, funcionarioController.criaFuncionario);
router.get('/', autenticarUsuario, funcionarioController.listarFuncionarios)
router.get('/:id', autenticarUsuario, funcionarioController.buscaFuncionario);
router.delete('/:id', autenticarUsuario, funcionarioController.deletaFuncionario);
export default router;