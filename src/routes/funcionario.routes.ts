import { Router } from "express";
import * as funcionarioController from '../controllers/funcionarios.controller';
import { autenticarUsuario } from "../middleware/auth.middleware";

const router = Router();

router.post('/criafuncionario',autenticarUsuario, funcionarioController.criaFuncionario);

export default router;