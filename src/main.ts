import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up CORS with specific allowed origins
  app.enableCors({
    origin: ['http://127.0.0.1:8080','https://zenithmoment.com', 'https://zmadmin.onrender.com', 'http://127.0.0.1:5500','https://zenithmoment2023.onrender.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
  });

  await app.listen(3000);
  console.log("App is running at port 3000")
}
bootstrap();
