import { Injectable, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './interface/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User as CreateUserDto } from './dto/create-user.dto';
import { AuthService } from 'src/auth/auth.service';

export class UserDTO {
  userName: string;
  email: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly usersModel: Model<User>,
    private authService: AuthService
    ) { }

  //创建cats
  async create(createUserDto: User): Promise<User> {
    const createdUser = new this.usersModel(createUserDto);
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    console.log(await this.usersModel.find())

    return await this.usersModel.find();
  }

  async findOne(_id: string): Promise<User> {
    return await this.usersModel.findById(_id).exec();
  }

  async update(_id: string, data: User) {

    let user = await this.usersModel.findById(_id).exec();

    if(!user._id) console.error("user doesn't exist");

    await this.usersModel.findByIdAndUpdate(_id, data).exec();

    return await this.usersModel.findById(_id).exec();
  }
  
  async delete(_id: string) {
    await this.usersModel.findByIdAndRemove(_id).exec();
    let user = await this.usersModel.findById(_id).exec();

    return { message: !user? "刪除成功": "刪除失敗"}
  }

  createToken(_id: String) {
    console.log(this.authService.createToken(_id))
    return this.authService.createToken(_id);
  }

  /* async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }   */
}