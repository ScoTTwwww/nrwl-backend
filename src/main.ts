import { NestFactory, } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const xxx = true;

  if (xxx) {
    app.enableCors();

    await app.listen(3000);
  } else {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.enableCors();
    app.useStaticAssets(join(__dirname, '..', 'public/web'), { prefix: '/web/' });
    app.useStaticAssets(join(__dirname, '..', 'public/ionic'), { prefix: '/mobile/' });
    app.useStaticAssets(join(__dirname, '..', 'public/tapGame'), { prefix: '/tapGame/' });

    await app.listen(Number(process.env.PORT) || 8080);
  }

}
bootstrap();
