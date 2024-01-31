import Usuario from "../../usuarios/domain/Usuario";

export default interface Cosa {
  id?: string;
  nombre: string;
  usuario?: Usuario;
}
