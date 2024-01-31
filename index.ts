import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import routerUsuarios from "./usuarios/infrastructure/rest/usuarios.rest";
import routerCosas from "./cosas/infrastructure/rest/cosas.rest";

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());

//routers
const api = "api/";
app.use(`/${api}usuarios`, routerUsuarios);
app.use(`/${api}cosas`, routerCosas);

app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});
