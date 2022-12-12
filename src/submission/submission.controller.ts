import { Controller, Delete, Get, Patch, Post, Body } from '@nestjs/common';
import { SubmissionEntity } from './entity/submission.entity';
import { SubmissionService } from './submission.service';

@Controller('submission')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Get('find-all')
  async findAll(): Promise<SubmissionEntity[]> {
    return await this.submissionService.findAll();
  }
  @Patch('update')
  updateSubmission(subID: string) {
    this.submissionService.updateSubmission(subID);
    return null;
  }

  @Delete('remove') // needs editing
  async remove(@Body('id') id: number): Promise<SubmissionEntity> {
    return await this.submissionService.remove(id);
  }

  @Post('create')
  createSubmission(@Body() body: any): any {
    this.submissionService.createSubmission(body);
  }
}
