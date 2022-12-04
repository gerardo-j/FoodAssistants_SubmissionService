import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubmissionController } from './submission/submission.controller';
import { SubmissionModule } from './submission/submission.module';
import { SubmissionService } from './submission/submission.service';

@Module({
  imports: [SubmissionModule],
  controllers: [AppController, SubmissionController],
  providers: [AppService, SubmissionService],
})
export class AppModule {}
