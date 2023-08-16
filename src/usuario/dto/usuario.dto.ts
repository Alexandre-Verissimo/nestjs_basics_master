import { IsDefined, IsEmail, IsString } from "class-validator"
import * as Joi from "joi"

export const usuarioDTOSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required()
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