import { PartialType } from '@nestjs/mapped-types';
import { CreateCashCutDto } from './create-cash-cut.dto';

export class UpdateCashCutDto extends PartialType(CreateCashCutDto) {}
