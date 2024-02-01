import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CashCut {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @DeleteDateColumn()
  deleteAt: Date;
}
