import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filter/http-exception/http-exception.filter';
import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 创建应用实例
  app.useGlobalFilters(new HttpExceptionFilter()); // 全局过滤器
  app.useGlobalInterceptors(new TransformInterceptor()); // 全局拦截器

  // 设置swagger文档
  const config = new DocumentBuilder()
    .setTitle('管理后台')   
    .setDescription('管理后台接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config); // 创建swagger文档
  SwaggerModule.setup('docs', app, document); // 设置swagger文档路径
  await app.listen(9020);
}
bootstrap();
