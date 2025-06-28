import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MenuEntity } from './Entitys/menu/menu';
import { ProductEntity } from './Entitys/product/product';
import { RestaurantEntity } from './Entitys/restaurant/restaurant';

import { RestaurantModule } from './Entitys/restaurant/restaurant.module';
import { MenuModule } from './Entitys/menu/menu.module';
import { ProductModule } from './Entitys/product/product.module';

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
    RestaurantModule,
    AuthModule,
    MenuModule,
    ProductModule,
  ],
  controllers: [
    AppController,  
  ],
  providers: [
    AppService,     
  ],
})
export class AppModule {}
