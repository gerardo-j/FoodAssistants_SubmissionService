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
 // importing our Create submission and Update submission Dto's
import { ApiTags } from '@nestjs/swagger';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
 // importing our submission entities from the entity file
import { SubmissionEntity } from './entity/submission.entity';
 // importing our exceptions and await operations from SubmissionService
import { SubmissionService } from './submission.service';

@ApiTags('Submission')
@Controller('submission')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  // Get parameter that will ensure that there is only one or no value
  @Get('find/:id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<SubmissionEntity> {
    return await this.submissionService.findOneById(id);
  }
 // Get parameter that will find all ID's and return the values as a list
  @Get('find-all')
  async findAll(): Promise<SubmissionEntity[]> {
    return await this.submissionService.findAll();
  }
 // Update parameter that saves / updates all changes made
  @Patch('update/:id')
  async updateSubmission(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateSubmissionDto,
  ): Promise<SubmissionEntity> {
    return await this.submissionService.updateSubmission(id, body);
  }
// Delete paramater that removes an ID or specified value from the list
  @Delete('remove/:id') // needs editing
  async remove(@Param('id') id: number): Promise<SubmissionEntity> {
    return await this.submissionService.remove(id);
  }
 // The Post request is being used to send a message to the server, saying that the submission was created
  @Post('create')
  async createSubmission(
    @Body() body: CreateSubmissionDto,
  ): Promise<SubmissionEntity> {
    return await this.submissionService.create(body);
  }
}
