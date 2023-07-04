import { UsuarioParamsDto, UsuarioDto, UsuarioSchema } from './dto/usuario.dto';
import { UsuarioInterface } from './interface/usuario.interface';
import { UsuarioService } from './usuario.service';
import { BadRequestException, Body, Controller, Delete, Get, Header, HttpStatus, Param, ParseIntPipe, Post, Query, Redirect, Req, Res, UseFilters, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { Request, Response } from 'express';
import { HttpExceptionFilter } from './filter';
import { AuthGuard } from './guards';
import { JoiValidationPipe } from './pipes';

@Controller('usuario')
@UseGuards(AuthGuard)
export class UsuarioController {
constructor(private readonly usuarioServie: UsuarioService) {}

  @Get('listar')
  getUsuarios(
    @Param('id', ParseIntPipe) id: number,
    @Query('sort') sort: boolean,
    @Body() data: UsuarioDto,
    @Req() req: Request
  ): UsuarioInterface [] {
    return this.usuarioServie.getUsuarios()
  }
  

  @Get('/:email')
  // @Redirect('')
  // @Header('Cache-Control', 'none')
  // como existe o filtro global no main, não é necessário usar o @UseFilters
  // @UseFilters(new HttpExceptionFilter())
  @UseGuards(new AuthGuard())
  async getUsuario(@Param() param: UsuarioParamsDto): Promise<UsuarioInterface> {
    // @Req() req: Request, @Res() res: Response
    try {
        return await this.usuarioServie.getUsuario(param.email)

    } catch (error) {
        throw new BadRequestException('Test')
    }
  }

  //ValidationPipe

  @Post('add')
  @UsePipes(new JoiValidationPipe(UsuarioSchema))
  addUsuario(@Body() usuario: UsuarioDto): UsuarioInterface {
    return this.usuarioServie.addUsuario(usuario)
  } 

  @Delete('/:email')
  deleteUsuario(@Param('email') params: UsuarioParamsDto): UsuarioInterface []{
    return this.usuarioServie.deleteUsuario(params.email)
  }

}