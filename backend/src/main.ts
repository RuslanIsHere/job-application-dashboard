import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true, // выкидывает лишние поля из body
        forbidNonWhitelisted: true, // если прислали лишнее поле — 400
        transform: true, // приводит типы (полезно для query/params)
      }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
