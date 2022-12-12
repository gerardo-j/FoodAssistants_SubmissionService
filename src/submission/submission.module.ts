import { Module } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SubmissionController } from './submission.controller';
import { SubmissionService } from './submission.service';
@Module({
  controllers: [SubmissionController],
  providers: [SubmissionService, Repository],
})
export class SubmissionModule {
  
}
