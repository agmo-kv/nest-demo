import { Module } from '@nestjs/common';
import { FriendsController } from './friends.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friends } from './friends.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Friends])],
  controllers: [FriendsController],
})
export class FriendsModule {}
