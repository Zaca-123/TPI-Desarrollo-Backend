import { BaseEntity } from 'typeorm';
import { MenuEntity } from './menu';
export declare class ProductEntity extends BaseEntity {
    id: number;
    name: string;
    description: string;
    menu: MenuEntity;
}
