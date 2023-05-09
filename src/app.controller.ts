import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('公共接口')
@Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('abc')
  getHello1(): number {
    return this.appService.getHello1();
  }

  @Post('abc')
  getHello2(): number {
    return this.appService.getHello1();
  }

  @Get('abc/:id')
  getHello3(): number {
    return this.appService.getHello1();
  }

  @Get('abc/user_*')
  getHello4(): number {
    return this.appService.getHello1();
  }
}
