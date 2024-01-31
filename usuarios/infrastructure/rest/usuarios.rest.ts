import express, { Request, Response } from "express";

//use cases
import UsuarioUseCases from "../../application/usuarios.usecases";
//repositories
import UsuarioRepository from "../../domain/usuarios.repository";
//implementations
import UsuarioRepositoryPostgres from "../db/usuarios.repository.postgres";
import Usuario from "../../domain/Usuario";

const usuariosRepository: UsuarioRepository = new UsuarioRepositoryPostgres();

const usuariosUseCases: UsuarioUseCases = new UsuarioUseCases(
  usuariosRepository
);

const router = express.Router();

router.post("/registro", async (req: Request, res: Response) => {
  const { alias, password } = req.body;
  const usuarioAPI: Usuario = {
    alias,
    password,
  };
  const usuario: Usuario = await usuariosUseCases.registro(usuarioAPI);
  res.json({ alias: usuario.alias });
});

router.post("/login", async (req: Request, res: Response) => {
  const { alias, password } = req.body;
  const usuarioAPI: Usuario = {
    alias,
    password,
  };
  const usuario: Usuario = await usuariosUseCases.login(usuarioAPI);
  res.json({ mensaje: "Login correcto" });
});

export default router;
