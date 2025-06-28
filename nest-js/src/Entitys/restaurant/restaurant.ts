import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { MenuEntity } from '../menu/menu';

@Entity('restaurant')
export class RestaurantEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column({ nullable: true })
    description: string;
    
    @Column({ nullable: true })
    imageUrl: string;
    
    @OneToMany(() => MenuEntity, menu => menu.restaurant)
    menu: MenuEntity[];
}