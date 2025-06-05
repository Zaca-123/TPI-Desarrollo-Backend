import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { MenuEntity } from './Entitys/menu';
import { ProductEntity } from './Entitys/product';
import { RestaurantEntity } from './Entitys/restaurant';

@Module({
  imports: [
    // ConfigModule para leer variables de entorno
    ConfigModule.forRoot({
      isGlobal: true, // Esto hace que las variables de entorno sean accesibles en toda la app
    }),

    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'), // Obtiene el valor de DB_HOST desde el .env
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
