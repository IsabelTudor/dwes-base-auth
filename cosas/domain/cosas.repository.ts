import Usuario from "../../usuarios/domain/Usuario";
import Cosa from "./Cosa";

export default interface CosasRepository {
  save(cosa: Cosa);
  find(usuario: Usuario): Promise<Cosa[]>;
}
