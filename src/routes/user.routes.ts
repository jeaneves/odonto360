import { Router } from "express";
import * as usuarioController from '../controllers/usuario.controller';
import { autenticarUsuario } from "../middleware/auth.middleware";

const router = Router();

router.post('/criausuario', usuarioController.criarUsuario);
router.post('/login', usuarioController.login);

router.get('/listarusuarios', autenticarUsuario, usuarioController.listarUsuarios);
router.get('/pegarusuario/:id', autenticarUsuario, usuarioController.pegarUsuario);

router.delete('/deletarUsuario/:id', autenticarUsuario, usuarioController.deletarUsuario);

export default router;