import { IsString, MinLength } from 'class-validator';

export class CreateProviderDto {
  @IsString()
  @MinLength(1)
  name: string;
}
