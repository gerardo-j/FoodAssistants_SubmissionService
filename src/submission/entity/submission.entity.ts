import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('submission')
export class SubmissionEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
}
