import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  const configOptions = new DocumentBuilder()
    .setTitle('Nestjs API for Arnia Meta-Vagas.')
    .setDescription('')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, configOptions);
  SwaggerModule.setup('v1/docs', app, document);
  
  app.setGlobalPrefix('v1/');

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(configService.get('DB_PORT') || 3001);
}
bootstrap();