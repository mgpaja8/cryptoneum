import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { CryptoCurrency } from './CryptoCurrency';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsNotEmpty()
  price!: number;

  @Column()
  @IsNotEmpty()
  marketCap!: string;

  @ManyToOne(type => CryptoCurrency, cc => cc.quotes)
  cryptoCurrency!: CryptoCurrency;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;
}
