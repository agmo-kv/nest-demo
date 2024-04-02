import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Feedbacks } from './feedbacks/feedbacks.entity';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { Friends } from './friends/friends.entity';
import { FriendsModule } from './friends/friends.module';

@Module({
  imports: [FriendsModule, FeedbacksModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'demo.sqlite',
    synchronize: true,
    entities: [Feedbacks, Friends],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
