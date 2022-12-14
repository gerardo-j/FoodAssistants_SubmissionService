import {
  Entity,  // importing entities and columns
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('submission')
export class SubmissionEntity {
  @PrimaryGeneratedColumn()
  id: number; // ID value consisting of digits
 
  // Columns consisting of variables that contain a string.
  // names, phone numbers, addresses, type of distribution, and type of items.

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
  // Column consisting of the created date
  @CreateDateColumn({ name: 'created_at' })
  createAt: Date;
  // Column consisting of the updated date
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
