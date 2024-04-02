import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class GetFriendsDto {
    @IsString()
    name: string;

    @IsNumber()
    @Type(() => Number)
    age: number;
}
