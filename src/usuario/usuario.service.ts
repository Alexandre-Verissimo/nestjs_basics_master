import { UsuarioInterface } from './interface/usuario.interface';
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class UsuarioService {
public usuarios: UsuarioInterface [] = []

  getUsuarios(): UsuarioInterface [] {
    return this.usuarios;
  }

 async getUsuario(email: string): Promise<UsuarioInterface> {
    const emailConvert = email
    const userData = this.usuarios.find(usuario => usuario.email === emailConvert)
    if(userData) {
      return Promise.resolve(userData)
    }

    throw new Error()
    
  }

  addUsuario(usuario: UsuarioInterface): UsuarioInterface {
    this.usuarios.push(usuario)
    return usuario
  }

  deleteUsuario(email: string): UsuarioInterface [] {
    const remainingUser = this.usuarios.filter(usuario => usuario.email !== email)
    this.usuarios = remainingUser
    return remainingUser || []
  }

}