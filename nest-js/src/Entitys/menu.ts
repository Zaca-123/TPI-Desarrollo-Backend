import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { RestaurantEntity } from './restaurant';
import { ProductEntity } from './product';

@Entity('menu')
export class MenuEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    description:string;
    @Column()
    price:number;
    @Column()
    imgUrl:string;

    @ManyToOne(()=> RestaurantEntity, restaurant => restaurant.menu)
    restaurant: RestaurantEntity;
    
    @OneToMany(()=> ProductEntity, product => product.menu )
    products:ProductEntity[];
}