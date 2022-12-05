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
    const submission = this.findAll(id);
    const post = this.submission.indexOf(submission);
    this.submission.splice(pos, 1);
    return true;
  }
}
