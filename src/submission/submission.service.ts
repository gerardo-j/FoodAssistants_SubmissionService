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

  async findOneById(id: number): Promise<SubmissionEntity> {
    try {
      return await this.submissionRepository.findOneByOrFail({
        id,
      });
    } catch (error) {
      throw new NotFoundException('Could not find submission.');
    }
  }

  async findAll(): Promise<SubmissionEntity[]> {
    return await this.submissionRepository.find();
  }

  async updateSubmission(
    id: number,
    partialSubmission: UpdateSubmissionDto,
  ): Promise<SubmissionEntity> {
    try {
      console.log(partialSubmission);

      await this.submissionRepository.update(id, partialSubmission);
    } catch (error) {
      console.log(error);

      throw new NotFoundException('Could not find submission. invalid object');
    }
    return await this.findOneById(id);
  }

  async remove(id: number): Promise<SubmissionEntity> {
    const submission = await this.findOneById(id);
    return this.submissionRepository.remove(submission);
  }

  async create(submission: CreateSubmissionDto): Promise<SubmissionEntity> {
    return await this.submissionRepository.save(submission);
  }
}
