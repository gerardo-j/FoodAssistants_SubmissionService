import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { SubmissionEntity } from './entity/submission.entity';
import { SubmissionService } from './submission.service';

@ApiTags('Submission')
@Controller('submission')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Get('find/:id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<SubmissionEntity> {
    return await this.submissionService.findOneById(id);
  }

  @Get('find-all')
  async findAll(): Promise<SubmissionEntity[]> {
    return await this.submissionService.findAll();
  }

  @Patch('update/:id')
  async updateSubmission(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateSubmissionDto,
  ): Promise<SubmissionEntity> {
    return await this.submissionService.updateSubmission(id, body);
  }

  @Delete('remove/:id') // needs editing
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
