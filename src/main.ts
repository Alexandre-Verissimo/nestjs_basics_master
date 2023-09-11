import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './core/pipes/class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalPipes(new ValidationPipe());

  //app.useGlobalFilters(new HttpExceptionFilter())
  //app.useGlobalInterceptors(new LoggingInterceptor())
  await app.listen(3099);
}
bootstrap();
