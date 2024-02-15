import {
  ArrayNotEmpty,
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

  @IsArray()
  @IsOptional()
  shipments: [];

  @IsDateString()
  date: Date;

  @IsArray()
  @ArrayNotEmpty()
  incomes: [];

  @IsArray()
  @ArrayNotEmpty()
  expenses: [];

  @IsObject()
  tickets: { [key: string]: number };

  @IsObject()
  coins: { [key: string]: number };
}
