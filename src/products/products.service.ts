import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    return await this.productsRepository.save(createProductDto);
  }

  async findAll() {
    return await this.productsRepository.find();
  }

  async findOne(id: string) {
    return await this.productsRepository.findOneBy({ id });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.findOneBy({ id });

    if (!product) {
      throw new BadRequestException('Product not found');
    }
    return await this.productsRepository.save({
      ...product,
      ...updateProductDto,
    });
  }

  async remove(id: string) {
    return await this.productsRepository.softDelete(id);
  }
}
