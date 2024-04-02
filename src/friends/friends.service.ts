import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateFriendDto } from './dtos/update-friend.dto';
import { Friends } from './friends.entity';

@Injectable()
export class FriendsService {
    constructor(@InjectRepository(Friends) private repo: Repository<Friends>) {}

    getFriends(name: string) {
        return this.repo.find({ where: { name: name }});
    }

    async getFriendById(id: number) {
        return await this.repo.findOneBy({ id: id });
    }

    createFriend(name: string, age: number) {
        const friend = this.repo.create({ name: name, age: age});
        return this.repo.save(friend);
    }

    async updateFriend(id: number, attrs: UpdateFriendDto) {
        const friend = await this.getFriendById(id);
        if (!friend) {
            throw new NotFoundException('Friend not found');
        }

        const updatedFriend = Object.assign(friend, attrs);
        return this.repo.save(updatedFriend);
    }

    async removeFriend(id: number) {
        const friend = await this.getFriendById(id);
        if (!friend) {
            throw new NotFoundException('Friend not found');
        }

        return this.repo.remove(friend);
    }
}
