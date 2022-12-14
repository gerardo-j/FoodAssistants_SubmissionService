import { Type } from 'class-transformer';
import {
  IsAlphanumeric,
  IsArray,
  IsIn,
  IsNumber,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { SubmissionEntity } from '../entity/submission.entity';

class Items {
  @IsArray()
  @IsOptional()
  grocery: string[];

  @IsArray()
  @IsOptional()
  generalHygiene: string[];

  @IsArray()
  @IsOptional()
  feminineHygiene: string[];

  @IsArray()
  @IsOptional()
  cleaningAndHealth: string[];
}

export class UpdateSubmissionDto {
  @IsAlphanumeric()
  @IsOptional()
  @Type()
  name: string;

  @IsPhoneNumber('US')
  @IsOptional()
  @Type()
  phone: string;

  @IsString()
  @IsOptional()
  @Type()
  address: string;

  @IsString()
  @IsOptional()
  @Type()
  @IsIn(['pickup', 'delivery'])
  distribution: 'pickup' | 'delivery';

  @IsNumber()
  @IsOptional()
  @Type()
  @IsPositive()
  residents: number;

  @IsObject()
  @Type()
  @IsOptional()
  items: Items;
}
