import { HttpExceptionFilter } from './usuario/filter/index';
import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );
  // usando o filtro global de exceção pra todos os modulos
  app.use(Logger)
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(3099);
}
bootstrap();
