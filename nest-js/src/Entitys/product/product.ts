import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { MenuEntity } from '../menu/menu';

@Entity('product')
export class ProductEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    description:string;

    @ManyToOne(()=> MenuEntity, menu => menu.restaurant)
    menu: MenuEntity;
}