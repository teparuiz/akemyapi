import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCashCutDto } from './dto/create-cash-cut.dto';
import { UpdateCashCutDto } from './dto/update-cash-cut.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CashCut } from './entities/cash-cut.entity';
import { Between, Repository } from 'typeorm';
import { FindCashCutDto } from './dto/find-cash-cut.dto';

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

  async findMany(dto: FindCashCutDto) {
    const { user, date, startDate, endDate } = dto;

    const conditions: Record<string, any> = {};

    if (user !== undefined && user !== null && user !== '') {
      conditions.user = user;
    }

    if (date !== undefined && date !== null) {
      conditions.date = date;
    }

    if (startDate !== undefined && endDate !== undefined) {
      conditions.date = Between(startDate, endDate);
    }

    return await this.cashCutsRepository.find({
      where: conditions,
    });
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
