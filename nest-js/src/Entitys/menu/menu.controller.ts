import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuEntity } from './menu';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  getAll(): Promise<MenuEntity[]> {
    return this.menuService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<MenuEntity> {
    return this.menuService.findOne(id);
  }

  @Post()
  create(@Body() menu: Partial<MenuEntity>): Promise<MenuEntity> {
    return this.menuService.create(menu);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() menu: Partial<MenuEntity>): Promise<MenuEntity> {
    return this.menuService.update(id, menu);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.menuService.remove(id);
  }
}
