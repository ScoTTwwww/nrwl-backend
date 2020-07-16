import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
 
import { TypeOrmModule } from '@nestjs/typeorm';
import { User as user } from './users/user.entity';

import { createConnection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

 

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://scott168:scott168@ds249967.mlab.com:49967/shoping-cart')
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
