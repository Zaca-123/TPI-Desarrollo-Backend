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
  async create(@Body() data: Partial<RestaurantEntity>): Promise<RestaurantEntity> {
    console.log('🎯 POST /restaurant called with data:', data);
    
    try {
      const result = await this.restaurantService.create(data);
      console.log('✅ Restaurant created successfully:', result);
      return result;
    } catch (error) {
      console.error('💥 Error in controller:', error);
      throw error;
    }
  }
}
