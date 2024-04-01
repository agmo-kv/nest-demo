import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('friends')
export class FriendsController {
    @Get()
    getFriends() {
        return 'getFriends';
    }

    @Get(':id')
    getFriendById() {
        return 'getFriendById';
    }

    @Post()
    createFriend() {
        return 'createFriend';
    }

    @Put(':id')
    updateFriend() {
        return 'updateFriend';
    }

    @Delete(':id')
    deleteFriend() {
        return 'deleteFriend';
    }
}
