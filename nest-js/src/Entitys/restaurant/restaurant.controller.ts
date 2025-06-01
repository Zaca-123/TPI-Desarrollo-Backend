import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantEntity } from './restaurant';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  findAll(): Promise<RestaurantEntity[]> {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<RestaurantEntity> {
    return this.restaurantService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<RestaurantEntity>): Promise<RestaurantEntity> {
    return this.restaurantService.create(data);
  }
}
