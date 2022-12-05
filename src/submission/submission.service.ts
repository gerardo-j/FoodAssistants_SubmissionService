import { Injectable } from '@nestjs/common';

@Injectable()
export class SubmissionService {
  findAll(): any[] {
    return [{}];
  }
    remove(id:number):void{ /* needs editting */
    const submission = this.findAll(id);
    const post = this.submission.indexOf(submission);
    this.submission.splice(pos, 1);
    return true;
  }
}
