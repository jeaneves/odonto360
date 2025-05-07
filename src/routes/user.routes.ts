import { Router } from "express";
import * as usuarioController from '../controllers/usuario.controller';
import { autenticarUsuario } from "../middleware/auth.middleware";

const router = Router();

router.post('/criausuario', usuarioController.criarUsuario);
router.post('/login', usuarioController.login);

router.get('/usuarios', autenticarUsuario, usuarioController.listarUsuarios);
router.get('/usuarios/:id', autenticarUsuario, usuarioController.pegarUsuario);

router.delete('/usuarios/:id', autenticarUsuario, usuarioController.deletarUsuario);

export default router;