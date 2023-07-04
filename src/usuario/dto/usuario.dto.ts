import { IsDefined, IsEmail, IsString } from "class-validator"
import * as Joi from 'joi'

export const UsuarioSchema = Joi.object({
  email: Joi.string().required(),
  name: Joi.string().required(),
})

export class UsuarioDto {
  @IsString()
  @IsEmail()
  @IsDefined()
  email: string

  @IsString()
  @IsDefined()
  name: string 
}

export class UsuarioParamsDto {

  @IsString()
  @IsEmail()
  @IsDefined()
  email: string

}