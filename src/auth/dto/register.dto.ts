import {
    IsEmail,
    IsNotEmpty,
    MinLength,
    IsString,
    IsOptional,
    Matches
} from 'class-validator';

export class RegisterDto {

    @IsNotEmpty({ message: 'fullName should not be empty' })
    @IsString({ message: 'fullName must be a string' })
    name!: string;

    @IsEmail()
    @IsOptional()
    email!: string;

    @IsString()
    @MinLength(6)
    @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
    })
    password!: string;
}
