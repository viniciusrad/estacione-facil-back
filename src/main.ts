import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { getConnection } from 'typeorm';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // Configuração mais permissiva do CORS
  app.enableCors({
    origin: 'http://localhost:4000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: '*', // Permite todos os headers
    exposedHeaders: '*',
    credentials: false, // Desabilitando credentials temporariamente
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap(); 