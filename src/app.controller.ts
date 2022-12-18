import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('test1')
  Test(): string {
    return 'test1';
  }
  @Get('test2')
  Testa(): string {
    return 'test2';
  }
}
