import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class SubmissionService {
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
