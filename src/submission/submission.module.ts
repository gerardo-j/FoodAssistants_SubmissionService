import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubmissionEntity } from './entity/submission.entity';
import { SubmissionController } from './submission.controller';
import { SubmissionService } from './submission.service';
@Module({
  imports: [TypeOrmModule.forFeature([SubmissionEntity])],
  controllers: [SubmissionController],
  providers: [SubmissionService, Repository<SubmissionEntity>],
})
export class SubmissionModule {}
