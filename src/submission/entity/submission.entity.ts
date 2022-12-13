import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('submission')
export class SubmissionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  distribution: 'pickup' | 'delivery';

  @Column()
  residents: number;

  @Column('json')
  items: {
    grocery: string[];
    generalHygiene: string[];
    feminineHygiene: string[];
    cleaningAndHealth: string[];
  };

  @CreateDateColumn({ name: 'created_at' })
  createAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
