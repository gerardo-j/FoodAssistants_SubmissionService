import {
  IsAlphanumeric,
  IsArray,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsPhoneNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { SubmissionEntity } from '../entity/submission.entity';

class Items extends SubmissionEntity {
  @IsArray()
  grocery: string[];

  @IsArray()
  generalHygiene: string[];

  @IsArray()
  feminineHygiene: string[];

  @IsArray()
  cleaningAndHealth: string[];
}

export class CreateSubmissionDto extends SubmissionEntity {
  @IsAlphanumeric()
  @IsNotEmpty()
  name: string;

  @IsPhoneNumber('US')
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['pickup', 'delivery'])
  distribution: 'pickup' | 'delivery';

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  residents: number;

  @IsObject()
  @IsNotEmpty()
  items: Items;
}
