import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CashCutService } from './cash-cut.service';
import { CreateCashCutDto } from './dto/create-cash-cut.dto';
import { UpdateCashCutDto } from './dto/update-cash-cut.dto';
import { AuthGuard } from './../auth/auth.guard';
@Controller('cash-cut')
export class CashCutController {
  constructor(private readonly cashCutService: CashCutService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createCashCutDto: CreateCashCutDto) {
    return this.cashCutService.create(createCashCutDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.cashCutService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: number) {
    return this.cashCutService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: number, @Body() updateCashCutDto: UpdateCashCutDto) {
    return this.cashCutService.update(id, updateCashCutDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: number) {
    return this.cashCutService.remove(id);
  }
}
