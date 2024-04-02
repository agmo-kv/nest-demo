import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateFriendDto } from './dtos/create-friend.dto';
import { GetFriendsDto } from './dtos/get-friends.dto';
import { UpdateFriendDto } from './dtos/update-friend.dto';

@Controller('friends')
export class FriendsController {
    @Get()
    getFriends(@Query() query: GetFriendsDto) {
        console.log(query);
        return 'getFriends';
    }

    @Get(':id')
    getFriendById(@Param('id') id: string) {
        console.log(id);
        return 'getFriendById';
    }

    @Post()
    createFriend(@Body() body: CreateFriendDto) {
        console.log(body);
        return 'createFriend';
    }

    @Put(':id')
    updateFriend(@Param('id') id: string, @Body() body: UpdateFriendDto) {
        console.log(id, body);
        return 'updateFriend';
    }

    @Delete(':id')
    deleteFriend(@Param('id') id: string) {
        console.log(id);
        return 'deleteFriend';
    }
}
