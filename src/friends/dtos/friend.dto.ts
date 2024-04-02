import { Expose } from 'class-transformer';

export class FriendDto {
    @Expose()
    id: number;

    @Expose()
    name: string;
}
