import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './middleware';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';


@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioService] 
})
export class UsuarioModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'usuario', method: RequestMethod.GET}
      )
      .forRoutes(UsuarioController)
  }
}