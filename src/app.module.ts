import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubmissionModule } from './submission/submission.module';

const options: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: process.env.POSTGRES_SYNC === 'true', // Enable only for development
  entities: ['dist/**/*.entity{.ts,.js}'],
};
@Module({
  imports: [SubmissionModule, TypeOrmModule.forRoot(options)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
