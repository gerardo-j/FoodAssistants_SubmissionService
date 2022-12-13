import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { SubmissionEntity } from './entity/submission.entity';
import { SubmissionService } from './submission.service';

@Controller('submission')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Get('find-all')
  async findAll(): Promise<SubmissionEntity[]> {
    return await this.submissionService.findAll();
  }

  @Patch('update/:id')
  async updateSubmission(
    @Param('id') id: number,
    @Body() body: any,
  ): Promise<SubmissionEntity> {
    console.log('body', body);
    console.log('id', id);

    return await this.submissionService.updateSubmission(id, body);
  }

  @Delete('remove') // needs editing
  async remove(@Param('id') id: number): Promise<SubmissionEntity> {
    return await this.submissionService.remove(id);
  }

  @Post('create')
  async createSubmission(
    @Body() body: CreateSubmissionDto,
  ): Promise<SubmissionEntity> {
    return await this.submissionService.create(body);
  }
}
