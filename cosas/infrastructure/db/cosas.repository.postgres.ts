import executeQuery from "../../../context/postgres.connector";
import Usuario from "../../../usuarios/domain/Usuario";
import Cosa from "../../domain/Cosa";
import CosasRepository from "../../domain/cosas.repository";

export default class CosaRepositoryPostgres implements CosasRepository {
  async save(cosa: Cosa) {
    const query = `insert into cosas (nombre, usuario) values ('${cosa.nombre}', '${cosa.usuario?.alias}') returning *`;
    const rows: any[] = await executeQuery(query);
  }

  async find(usuario: Usuario): Promise<Cosa[]> {
    const query = `select * from cosas where usuario = '${usuario.alias}'`;
    const rows: any[] = await executeQuery(query);
    const cosas: Cosa[] = rows.map((cosa) => {
      return {
        id: cosa.id,
        nombre: cosa.nombre,
      };
    });
    return cosas;
  }
}
