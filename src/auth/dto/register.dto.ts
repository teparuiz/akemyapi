import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength, IsInt } from 'class-validator';

export class RegisterDto {
  @IsString()
  @MinLength(1)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @Transform(({ value }) => value.trim())
  password: string;

  @IsInt()
  age: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  role: string;
}
