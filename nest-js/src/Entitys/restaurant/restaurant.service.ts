import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantEntity } from './restaurant';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(RestaurantEntity)
    private readonly restaurantRepository: Repository<RestaurantEntity>,
  ) {}

  async findAll(): Promise<RestaurantEntity[]> {
    return this.restaurantRepository.find({ relations: ['menu'] });
  }

  async findOne(id: number): Promise<RestaurantEntity> {
    const restaurant = await this.restaurantRepository.findOne({
      where: { id },
      relations: ['menu'],
    });
    if (!restaurant) {
      throw new NotFoundException(`Restaurant with id ${id} not found`);
    }
    return restaurant;
  }

  async create(data: Partial<RestaurantEntity>): Promise<RestaurantEntity> {
    console.log('📝 Creating restaurant with data:', data);
    
    try {
      const restaurant = this.restaurantRepository.create(data);
      console.log('✨ Restaurant entity created:', restaurant);
      
      const savedRestaurant = await this.restaurantRepository.save(restaurant);
      console.log('💾 Restaurant saved to database:', savedRestaurant);
      
      return savedRestaurant;
    } catch (error) {
      console.error('❌ Error creating restaurant:', error);
      throw error;
    }
  }
}
