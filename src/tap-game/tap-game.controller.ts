import { Controller, Post, Body, Get, Param, Response, HttpStatus, Delete, HttpService, Render } from '@nestjs/common';
import { TapGameService } from './tap-game.service';
 
@Controller('tap-game')
export class TapGameController {
  constructor(  private tapGameService: TapGameService) {

  }

  @Get('')
  root() {
    return { 'zzz': 'sss'};
  }
  
  @Get('basicInfo')
   getBasicInfo() {
    return  this.tapGameService.AuthSignin() 
  }

  @Post('playGame')
  playGame(@Body() body) {
   console.log(body)
   return   this.tapGameService.playGame(body); 
 }


 @Post('update')
 update(@Body() body) {
  console.log(body)
  return   this.tapGameService.update(body); 
}

@Post('prestige')
prestige(@Body() body) {
 console.log(body)
 return   this.tapGameService.prestige(body); 
}

  
  
}
