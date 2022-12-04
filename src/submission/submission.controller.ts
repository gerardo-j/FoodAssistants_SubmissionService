import { Controller, Get } from '@nestjs/common';
import { SubmissionService } from './submission.service';

@Controller('submission')
export class SubmissionController {
  @Get('find-all')
  findAll(): any[] {
    return [];
  }
}
