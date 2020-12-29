import { Module, HttpModule, HttpService } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
 
import { TypeOrmModule } from '@nestjs/typeorm';
import { User as user } from './users/user.entity';

import { createConnection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

import { TapGameModule } from './tap-game/tap-game.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TapGameModule,
    MongooseModule.forRoot('mongodb+srv://scott:1234@cluster0.chhyw.mongodb.net/my-admin'),
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
