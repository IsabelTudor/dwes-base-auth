import { compare } from "bcrypt";
import Usuario from "../domain/Usuario";
import UsuarioRepository from "../domain/usuarios.repository";
import { hash } from "../../context/security/encrypter";

export default class UsuarioUseCases {
  constructor(private usuarioRepository: UsuarioRepository) {}

  async registro(usuario: Usuario): Promise<Usuario> {
    const cifrada = hash(usuario.password);
    usuario.password = cifrada;
    return this.usuarioRepository.registro(usuario);
  }

  async login(usuario: Usuario): Promise<Usuario> {
    const usuarioBD = await this.usuarioRepository.login(usuario);
    const iguales = await compare(usuario.password, usuarioBD.password);
    if (iguales) {
      return usuarioBD;
    } else {
      throw new Error("Usuario/contraseña no es correcto");
    }
  }
}
