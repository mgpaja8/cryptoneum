import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Quote } from './Quote';

@Entity()
@Unique(['name', 'symbol'])
export class CryptoCurrency {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsNotEmpty()
  name!: string;

  @Column()
  @IsNotEmpty()
  symbol!: string;

  @Column()
  rank!: number;

  @Column({ nullable: true })
  selected?: boolean;

  @OneToMany(type => Quote, quote => quote.cryptoCurrency)
  quotes!: Quote[];

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;
}
