import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MenuEntity } from './Entitys/menu';
import { ProductEntity } from './Entitys/product';
import { RestaurantEntity } from './Entitys/restaurant';

import { RestaurantController } from './Entitys/restaurant/restaurant.controller';
import { RestaurantService } from './Entitys/restaurant/restaurant.service';

import { MenuController } from './Entitys/menu/menu.controller';
import { MenuService } from './Entitys/menu/menu.service';

import { ProductController } from './Entitys/product/product.controller';
import { ProductService } from './Entitys/product/product.service';

import { AuthModule } from './auth/auth.module'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [MenuEntity, ProductEntity, RestaurantEntity],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([MenuEntity, ProductEntity, RestaurantEntity]),

   
    AuthModule,
  ],
  controllers: [
    AppController,
    RestaurantController,
    MenuController,
    ProductController,
  ],
  providers: [
    AppService,
    RestaurantService,
    MenuService,
    ProductService,
  ],
})
export class AppModule {}
