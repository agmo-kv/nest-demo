import { IsNumber, IsString, Max, Min } from 'class-validator';

export class UpdateFriendDto {
    @IsString()
    name: string;

    @IsNumber()
    @Min(1)
    @Max(99)
    age: number;
}
