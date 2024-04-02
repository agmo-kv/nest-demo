import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateFriendDto } from './dtos/create-friend.dto';
import { FriendDto } from './dtos/friend.dto';
import { GetFriendsDto } from './dtos/get-friends.dto';
import { UpdateFriendDto } from './dtos/update-friend.dto';
import { FriendsService } from './friends.service';

@Controller('friends')
export class FriendsController {
  constructor(private friendsService: FriendsService) {}

  @Get()
  @Serialize(FriendDto)
  //   @UseInterceptors(ClassSerializerInterceptor)
  getFriends(@Query() query: GetFriendsDto) {
    console.log(query);
    return this.friendsService.getFriends(query.name);
  }

  @Get(':id')
  getFriendById(@Param('id') id: string) {
    console.log(id);
    return this.friendsService.getFriendById(parseInt(id));
  }

  @Post()
  createFriend(@Body() body: CreateFriendDto) {
    console.log(body);
    return this.friendsService.createFriend(body.name, body.age);
  }

  @Put(':id')
  updateFriend(@Param('id') id: string, @Body() body: UpdateFriendDto) {
    console.log(id, body);
    return this.friendsService.updateFriend(parseInt(id), body);
  }

  @Delete(':id')
  deleteFriend(@Param('id') id: string) {
    console.log(id);
    return this.friendsService.removeFriend(parseInt(id));
  }
}
