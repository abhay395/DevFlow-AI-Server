import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    Matches,
    MinLength,
    ValidateIf,
} from 'class-validator';

export class LoginDto {

    @IsEmail()
    @IsOptional()
    email!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password!: string;
}
