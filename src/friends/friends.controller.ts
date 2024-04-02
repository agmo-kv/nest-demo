import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('friends')
export class FriendsController {
    @Get()
    getFriends(@Query() query: any) {
        console.log(query);
        return 'getFriends';
    }

    @Get(':id')
    getFriendById(@Param('id') id: string) {
        console.log(id);
        return 'getFriendById';
    }

    @Post()
    createFriend(@Body() body: any) {
        console.log(body);
        return 'createFriend';
    }

    @Put(':id')
    updateFriend(@Param('id') id: string, @Body() body: any) {
        console.log(id, body);
        return 'updateFriend';
    }

    @Delete(':id')
    deleteFriend(@Param('id') id: string) {
        console.log(id);
        return 'deleteFriend';
    }
}
