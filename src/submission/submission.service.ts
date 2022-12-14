import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { SubmissionEntity } from './entity/submission.entity';

@Injectable()
export class SubmissionService {
  constructor(
    @InjectRepository(SubmissionEntity)
    private readonly submissionRepository: Repository<SubmissionEntity>,
  ) {}
    // returns the promise and gets each of the ID numbers
    // if it fails to return the values, throws NotFoundException and prints 'Could not find submission.'
  async findOneById(id: number): Promise<SubmissionEntity> {
    try {
      return await this.submissionRepository.findOneByOrFail({
        id,
      });
    } catch (error) {
      throw new NotFoundException('Could not find submission.');
    }
  }
  // returns the promise and gets the all submitted values
  async findAll(): Promise<SubmissionEntity[]> {
    return await this.submissionRepository.find();
  }
  // try and catch for updateSubmission. awaits for the submission to update.
  // if an errors occurs, it'll print 'Could not update submission.'
  async updateSubmission(
    id: number,
    partialSubmission: UpdateSubmissionDto,
  ): Promise<SubmissionEntity> {
    try {
      console.log(partialSubmission);
      await this.submissionRepository.update(id, partialSubmission);
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Could not update submission.');
    }
    return await this.findOneById(id);
  }
  // removes a promise
  async remove(id: number): Promise<SubmissionEntity> {
    const submission = await this.findOneById(id);
    return this.submissionRepository.remove(submission);
  }
 // creates a promise
  async create(submission: CreateSubmissionDto): Promise<SubmissionEntity> {
    return await this.submissionRepository.save(submission);
  }
}
