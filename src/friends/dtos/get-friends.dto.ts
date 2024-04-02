import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetFriendsDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    age: number;
}
