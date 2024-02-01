import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateCashCutDto {
  @IsString()
  description: string;

  @IsInt()
  @IsPositive()
  total: number;
}
