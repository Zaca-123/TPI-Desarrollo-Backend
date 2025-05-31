import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { MenuEntity } from '../menu/menu';
@Entity('restaurant')
export class RestaurantEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:String;
    @Column()
    description:string;
    @Column()
    imageUrl:string;
    
    @OneToMany(()=> MenuEntity, menu => menu.restaurant )
    menu:MenuEntity[];

}