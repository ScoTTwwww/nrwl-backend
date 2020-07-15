import { Injectable, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './interface/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User as CreateUserDto } from './dto/create-user.dto';

export class UserDTO{
  userName: string;
  email: string;
}

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly usersModel: Model<User>)  {}


    //创建cats
    async create(createUserDto: User): Promise<User> {
      const createdUser = new this.usersModel(createUserDto);
      return await createdUser.save();
    }
  
 

 async findAll(): Promise<User[]> {
   console.log(await  this.usersModel.find())
    return await  this.usersModel.find();
  }
 
 async findOne(userName: string): Promise<User> {
    return await this.usersModel.find((user) => user.userName === userName);
  }

  /* async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }   */
}