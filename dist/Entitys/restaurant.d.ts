import { BaseEntity } from 'typeorm';
import { MenuEntity } from './menu';
export declare class RestaurantEntity extends BaseEntity {
    id: number;
    name: String;
    description: string;
    imageUrl: string;
    menu: MenuEntity[];
}
