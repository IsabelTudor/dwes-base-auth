import Usuario from "../../usuarios/domain/Usuario";
import Cosa from "../domain/Cosa";
import CosasRepository from "../domain/cosas.repository";

export default class CosasUseCases {
  constructor(private cosasRepository: CosasRepository) {}
  async save(cosa: Cosa) {
    return this.cosasRepository.save(cosa);
  }

  async find(usuario: Usuario): Promise<Cosa[]> {
    return this.cosasRepository.find(usuario);
  }
}
