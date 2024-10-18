import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ? Esta opción significa que solo se permiten los campos que están explícitamente definidos en el DTO (Data Transfer Object) utilizado para validar la entrada.
    }),
  );
  await app.listen(3000);
}
bootstrap();
