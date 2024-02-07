import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CashCut {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  comments: string;

  @Column({ nullable: false })
  user: string;

  @Column({ nullable: false })
  yesterday: number;

  @Column({ nullable: false })
  startDay: number;

  @Column({ nullable: false })
  endDay: number;

  @Column({ nullable: false })
  kyteSells: number;

  @Column({ nullable: false })
  credit: number;

  @Column({ nullable: false })
  cash: number;

  @Column({ nullable: false })
  diffCashCredit: number;

  @Column({ nullable: false })
  total: number;

  @Column('json', { nullable: true })
  shipments: { [key: string]: number };

  @Column('json', { nullable: true })
  incomes: [];

  @Column('json', { nullable: true })
  expenses: [];

  @Column('json', { nullable: true })
  tickets: { [key: string]: number };

  @Column('json', { nullable: true })
  coins: { [key: string]: number };

  @Column('date', { default: () => '(CURRENT_DATE)' })
  date: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
