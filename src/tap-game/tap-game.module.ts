import { Module, HttpModule, HttpService } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TapGameController } from './tap-game.controller';
import { TapGameService } from './tap-game.service';

@Module({
  providers: [TapGameService],
  controllers: [TapGameController],
  imports: [HttpModule ]
})
export class TapGameModule { }