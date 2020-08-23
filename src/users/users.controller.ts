import { Controller, Post, Body, Get, Param, Response, HttpStatus, Delete, UseGuards, Request, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { create } from 'domain';
import { User } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/users')
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
  // @UseGuards(AuthGuard('jwt'))
  create(@Response() res, @Request() req, @Body() createUserDto: User) {
    this.Userservice.create(createUserDto);
    /*    const sss: String = createUserDto.id;
        const zz = this.Userservice.createToken(sss);
        console.log(zz) */
    console.log(req)
    return res.status(HttpStatus.OK).json(createUserDto);
  }


  
   
}
