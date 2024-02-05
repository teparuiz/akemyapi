
import { IsOptional, IsString, IsDateString } from 'class-validator';

export class FindCashCutDto {
  @IsOptional()
  @IsString()
  user?: string;

  @IsOptional()
  @IsDateString()
  date: Date;

  @IsOptional()
  @IsDateString()
  startDate?: Date;

  @IsOptional()
  @IsDateString()
  endDate?: Date;
}
