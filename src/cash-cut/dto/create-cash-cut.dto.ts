import {
  IsArray,
  IsDateString,
  IsNumber,
  IsObject,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateCashCutDto {
  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  comments: string;

  @IsString()
  user: string;

  @IsNumber()
  yesterday: number;

  @IsNumber()
  startDay: number;

  @IsNumber()
  endDay: number;

  @IsNumber()
  kyteSells: number;

  @IsNumber()
  credit: number;

  @IsNumber()
  cash: number;

  @IsNumber()
  diffCashCredit: number;

  @IsObject()
  @IsOptional()
  shipments: { [key: string]: number };

  @IsDateString()
  date: Date;

  @IsArray()
  incomes: [];

  @IsArray()
  expenses: [];

  @IsObject()
  tickets: { [key: string]: number };

  @IsObject()
  coins: { [key: string]: number };

  @IsNumber()
  @IsPositive()
  total: number;
}
