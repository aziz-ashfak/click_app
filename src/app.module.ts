import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TrackModule } from './track/track.module';
import * as dotenv from 'dotenv';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'dpg-d1lq4hqdbo4c73a7ovk0-a.oregon-postgres.render.com',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
      username: process.env.DB_USERNAME || ' mobile_attribution_app_user',
      password: process.env.DB_PASSWORD || 'aziz8313', // Default for testing
      database: process.env.DB_DATABASE || 'mobile_attribution_app',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TrackModule,
  ],
})
export class AppModule {}