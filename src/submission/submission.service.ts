import { Injectable,NotFoundException} from '@nestjs/common';

@Injectable()
export class SubmissionService {
  findAll(): any[] {
    return [{}];
  }
  updateSubmission(subID:string){
    if(!subID){
      throw new NotFoundException('could not find sub');
    }
  }
}
