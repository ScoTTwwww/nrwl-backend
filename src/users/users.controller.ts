import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { create } from 'domain';
import { User } from './dto/create-user.dto';

@Controller('Users')
export class UsersController {
  constructor(private readonly Userservice: UsersService) {

  }
  @Get()
  getAll() {
    return this.Userservice.findAll();
  }
 /*  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.Userservice.create(createCatDto);
  } */

  @Get(':userName')
  getUserById(@Param('userName') userName){
     
    return this.Userservice.findOne(userName);
  }

  @Post()
  create(@Body() createUserDto: User) {
    this.Userservice.create(createUserDto);
  }
}
