import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';


@Injectable()
export class SubmissionService {  
  constructor(private readonly repository: Repository<any>) {}

  findAll(): any[] {
    return [{}];
  }
  updateSubmission(subID: string) {
    if (!subID) {
      throw new NotFoundException('could not find sub');
    }
  }
  remove(id: number): void {
    /* needs editting */
    throw new Error('Method not implemented');
  }

  createSubmission(submission: any): void {
    // submission = link to database
  }
}
