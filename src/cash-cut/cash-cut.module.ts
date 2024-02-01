import { Module } from '@nestjs/common';
import { CashCutService } from './cash-cut.service';
import { CashCutController } from './cash-cut.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CashCut } from './entities/cash-cut.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CashCut])],
  controllers: [CashCutController],
  providers: [CashCutService],
})
export class CashCutModule {}
