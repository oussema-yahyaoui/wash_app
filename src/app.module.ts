import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WorkersModule } from './workers/workers.module';

import { PaymentModule } from './payment/payment.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true},
                                       
      ),
    TypeOrmModule.forRoot({
      type: "postgres",
      url: process.env.DATABASE_URL ,
      autoLoadEntities: true,
      synchronize: true,
      // extra: {
      //   ssl: true
      // }
    }),
    UsersModule,
    WorkersModule,
    PaymentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
