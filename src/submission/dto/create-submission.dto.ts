import { SubmissionEntity } from '../entity/submission.entity';

export class CreateSubmissionDto extends SubmissionEntity {
  name: string;
}
