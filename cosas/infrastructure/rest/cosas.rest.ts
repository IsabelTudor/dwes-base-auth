import express, { Request, Response } from "express";
import { isAuth } from "../../../context/security/auth";
import Cosa from "../../domain/Cosa";
import Usuario from "../../../usuarios/domain/Usuario";

//use cases
import CosasUseCases from "../../application/cosas.usecases";
//repositories
import CosasRepository from "../../domain/cosas.repository";
//implementations
import CosaRepositoryPostgres from "../db/cosas.repository.postgres";

const cosasRepository: CosasRepository = new CosaRepositoryPostgres();
const cosasUseCases = new CosasUseCases(cosasRepository);

const router = express.Router();

router.post("/", isAuth, async (req: Request, res: Response) => {
  const { nombre } = req.body;
  const usuario: Usuario = {
    alias: req.body.alias,
  };
  const cosaAPI: Cosa = {
    nombre,
    usuario,
  };

  await cosasUseCases.save(cosaAPI);
  res.json({ message: "cosa guardada" });
});

router.get("/", isAuth, async (req: Request, res: Response) => {
  const usuario: Usuario = {
    alias: req.body.alias,
  };
  const cosas = await cosasUseCases.find(usuario);
  res.send(cosas);
});

export default router;
