import { IsNumber, IsInt, IsString, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  image: string = '';

  @IsInt()
  quantity: number;

  @IsString()
  category: string;

  @IsString()
  unity: string;
}
