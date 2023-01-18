import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  // getParam(@Param('id') id: string, @Query('hoge') hoge: string): string {
  getParam(@Param('id') id: string): string {
    // return `This action returns ${id} ${hoge} cat`;
    return `This action returns ${id} cat`;
  }

  @Get(':id/query')
  getQuery(@Query('id') id: string) {
    return { id };
  }
}
