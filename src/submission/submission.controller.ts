import { Controller, Delete, Get, Param, Patch, Post, Body} from '@nestjs/common';
import { SubmissionService } from './submission.service';

@Controller('submission')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Get('find-all')
  findAll(): any[] {
    return this.submissionService.findAll();
  }
  @Patch('update')
  updateSubmission(subID: string) {
    this.submissionService.updateSubmission(subID);
    return null;
  }

  @Delete(':id') // needs editing
  remove(@Param('id') id: number): void {
    return this.submissionService.remove(id);
  }

  @Post("create")
  createSubmission(@Body() body: any) :any {
    this.submissionService.createSubmission(body);
  }

}
