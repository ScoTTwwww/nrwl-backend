import { Controller, Post, Body, Get, Param, Response, HttpStatus, Delete } from '@nestjs/common';
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

  @Get(':_id')
  getUserById(@Param('_id') _id) {
    return this.Userservice.findOne(_id);
  }


  @Post(':_id')
  updateUser(@Param('_id') _id, @Body() body) {
    return this.Userservice.update(_id, body);
  }

  @Delete(':_id')
  deleteUser(@Param('_id') _id) {
    return this.Userservice.delete(_id);
  }

  @Post()
  create(@Response() res, @Body() createUserDto: User) {
    this.Userservice.create(createUserDto);

    return res.status(HttpStatus.OK).json(createUserDto);
  }
}
