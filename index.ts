import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//import { routerEstudiantes } from "./estudiantes/infrastructure/rest/estudiantes.router";

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());

//routers
const api = "api/";
//app.use(`/${api}ciclos`, routerCiclos);

app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});
