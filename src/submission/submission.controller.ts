import { Controller, Get,Patch } from '@nestjs/common';
import { SubmissionService } from './submission.service';

@Controller('submission')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Get('find-all')
  findAll(): any[] {
    return this.submissionService.findAll();
  }
  @Patch('update')
  updateSubmission(subID:string){
    this.submissionService.updateSubmission(subID);
    return null;
  }

  
 
  @Delete(':id') /* needs editting */
  remove(@Param('id') id: number) : void {
    return this.submissionService.remove(id);
  } 
}
