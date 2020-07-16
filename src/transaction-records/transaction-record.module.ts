/* import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionRecordsScheme } from './schemas/users.schema';
 

@Module({
   providers: [TransactionRecordsService],
  controllers: [TransactionRecordsController], 
  imports: [MongooseModule.forFeature(
    [{ name: 'TransactionRecords', schema: TransactionRecordsScheme }],
  )]
})
export class TransactionRecordsModule { } */