import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CashCutService } from './cash-cut.service';
import { CreateCashCutDto } from './dto/create-cash-cut.dto';
import { UpdateCashCutDto } from './dto/update-cash-cut.dto';

@Controller('cash-cut')
export class CashCutController {
  constructor(private readonly cashCutService: CashCutService) {}

  @Post()
  create(@Body() createCashCutDto: CreateCashCutDto) {
    return this.cashCutService.create(createCashCutDto);
  }

  @Get()
  findAll() {
    return this.cashCutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cashCutService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCashCutDto: UpdateCashCutDto) {
    return this.cashCutService.update(id, updateCashCutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cashCutService.remove(id);
  }
}
