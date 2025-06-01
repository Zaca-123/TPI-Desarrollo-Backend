import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from './restaurant';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantEntity])],
  providers: [RestaurantService],
  controllers: [RestaurantController],
})
export class RestaurantModule {}
