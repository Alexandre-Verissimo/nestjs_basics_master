//import { JoiValidationPipe } from '../pipes/joi-validation';
import { UsuarioParamsDto, UsuarioDto } from './dto/usuario.dto';
import { UsuarioInterface } from './interface/usuario.interface';
import { UsuarioService } from './usuario.service';
import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Query, Req, UseFilters, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { LoggingInterceptor } from 'src/core/interceptor';
import { HttpExceptionFilter } from 'src/core/filter/http-exception.filtert';
import { AuthGuard } from 'src/core/guard';
//import { ValidationPipe }  from 'src/pipes/class-validator' Esse ValidationPipe é o class-validator dentro da pasta pipes (um custom)


@UseInterceptors(LoggingInterceptor)
@Controller('usuario')
@UseGuards(AuthGuard)
export class UsuarioController {
constructor(private readonly usuarioServie: UsuarioService) {}

  @Get('listar')
  getUsuarios(): UsuarioInterface [] {
    return this.usuarioServie.getUsuarios()
  }
  

  @Get('/:email')
  @UseInterceptors(new LoggingInterceptor)
  @UseFilters(new HttpExceptionFilter())
  @UseGuards(new AuthGuard)
  async getUsuario(@Param() param: UsuarioParamsDto): Promise<UsuarioInterface> {
    try {
        return await this.usuarioServie.getUsuario(param.email)
 
    } catch (error) {
        throw new NotFoundException('Usuário não encontrado')
    }
  }

  //ValidationPipe

  @Post('add')
  @UseFilters(new HttpExceptionFilter())
  @UsePipes(new ValidationPipe())
  addUsuario(@Body() usuario: UsuarioDto): UsuarioInterface {
    return this.usuarioServie.addUsuario(usuario)
  } 

  @Delete('/:email')
  deleteUsuario(@Param('email') params: UsuarioParamsDto): UsuarioInterface []{
    return this.usuarioServie.deleteUsuario(params.email)
  }

}