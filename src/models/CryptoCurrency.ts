import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from 'typeorm';
import { IsNotEmpty, Length } from 'class-validator';

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

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;
}
