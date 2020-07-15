import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';

export class UserDTO{
  username: string;
  email: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

/*   inMemoryUsers = [
    {
      id: 2,
      username: '測試2',
      email: 'test2@test.com',
    },
    {
      id: 3,
      username: '測試3',
      email: 'test3@test.com',
    },
  ];

  @Get()
  root(): string  {
    return "ZZZ"
  }


  @Put()
  update(){
    return '更新資料';
  }

  @Delete()
  delete(){
    return '刪除資料';
  }

  @Get(':userId')
  getUserById(@Param('userId') id){
 const userFromMemory = this.inMemoryUsers.find((user) => user.id === parseInt(id, 10)); //解析後都是字串，要使用parseInt傳成number
    const resUser = new UserDTO();
    resUser.username = userFromMemory.username;
    resUser.email = userFromMemory.email;
    return '111';
  }

  @Post()
  create(@Body() userDTO: UserDTO){ // userDTO: UserDTO代表userDTO是UserDTO型別
    return `使用者:${userDTO.username}已建立`;
  } */
}
