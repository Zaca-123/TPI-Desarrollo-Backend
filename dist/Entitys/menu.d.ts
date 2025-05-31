import { BaseEntity } from 'typeorm';
import { RestaurantEntity } from './restaurant';
import { ProductEntity } from './product';
export declare class MenuEntity extends BaseEntity {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    restaurant: RestaurantEntity;
    products: ProductEntity[];
}
