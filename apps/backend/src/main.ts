import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.register('xgame'));

  const configService = app.get(ConfigService);

  app.enableCors({
    origin: configService.get<string>('CLIENT_HOST'),
    credentials: true,
  });

  await app.listen(2223);
}
bootstrap();
