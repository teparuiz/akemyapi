import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCashCutDto } from './dto/create-cash-cut.dto';
import { UpdateCashCutDto } from './dto/update-cash-cut.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CashCut } from './entities/cash-cut.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CashCutService {
  constructor(
    @InjectRepository(CashCut)
    private cashCutsRepository: Repository<CashCut>,
  ) {}

  async create(createCashCutDto: CreateCashCutDto) {
    return await this.cashCutsRepository.save(createCashCutDto);
  }

  async findAll() {
    return await this.cashCutsRepository.find();
  }

  async findOne(id: number) {
    return await this.cashCutsRepository.findOneBy({ id });
  }

  async update(id: number, updateCashCutDto: UpdateCashCutDto) {
    const cashcut = await this.cashCutsRepository.findOneBy({ id });

    if (!cashcut) {
      throw new BadRequestException('Cashcut not found');
    }

    return await this.cashCutsRepository.save({
      ...cashcut,
      ...updateCashCutDto,
    });
  }

  async remove(id: number) {
    return await this.cashCutsRepository.softDelete(id);
  }
}
