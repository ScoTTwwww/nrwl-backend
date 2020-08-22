import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersScheme } from './schemas/users.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    AuthModule,
    MongooseModule.forFeature(
    [{ name: 'Users', schema: UsersScheme }],
  )]
})
export class UsersModule { }