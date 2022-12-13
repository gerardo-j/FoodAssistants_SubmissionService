import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
      throw new NotFoundException('could not find submission');
    }
  }

  async findAll(): Promise<SubmissionEntity[]> {
    return await this.submissionRepository.find();
  }

  async updateSubmission(
    id: number,
    partialSubmission: SubmissionEntity,
  ): Promise<SubmissionEntity> {
    const submission = await this.findOneById(id);

    if (!submission) {
      throw new NotFoundException('could not find submission');
    }
    await this.submissionRepository.update(id, partialSubmission);
    return await this.findOneById(id);
  }

  async remove(id: number): Promise<SubmissionEntity> {
    const submission = await this.findOneById(id);
    return this.submissionRepository.remove(submission);
  }

  async create(submission: SubmissionEntity): Promise<SubmissionEntity> {
    return await this.submissionRepository.save(submission);
  }
}
