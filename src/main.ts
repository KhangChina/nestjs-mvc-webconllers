import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import path, { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  //Set path frontend
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', 'views/includes')); 


  await app.listen(parseInt(`${process.env.CORE_PORT}`));
  console.log(`😵😵 Server control design by Khang Nguyễn: ${process.env.SERVER}:${process.env.CORE_PORT}`)
}
bootstrap();