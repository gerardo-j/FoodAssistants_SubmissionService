import { Controller, Get } from '@nestjs/common';
import { SubmissionService } from './submission.service';

@Controller('submission')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Get('find-all')
  findAll(): any[] {
    return this.submissionService.findAll();
  }
}
