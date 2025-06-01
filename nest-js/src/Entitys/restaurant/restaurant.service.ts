import { Injectable } from '@nestjs/common';
import { RestaurantEntity } from './restaurant';

@Injectable()
export class RestaurantService {
  async findAll(): Promise<RestaurantEntity[]> {
    return await RestaurantEntity.find({ relations: ['menu'] });
  }

  async findOne(id: number): Promise<RestaurantEntity> {
    const restaurant = await RestaurantEntity.findOne({
      where: { id },
      relations: ['menu'],
    });
    if (!restaurant) {
      throw new Error(`Restaurant with id ${id} not found`);
    }
    return restaurant;
  }

  async create(data: Partial<RestaurantEntity>): Promise<RestaurantEntity> {
    const restaurant = RestaurantEntity.create(data) as RestaurantEntity;
    return await restaurant.save();
  }
}
