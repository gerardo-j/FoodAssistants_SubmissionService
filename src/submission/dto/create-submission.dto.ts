import { Type } from 'class-transformer';
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
  ValidateNested,
} from 'class-validator';

class Items {
  @IsArray()
  grocery: string[];

  @IsArray()
  generalHygiene: string[];

  @IsArray()
  feminineHygiene: string[];

  @IsArray()
  cleaningAndHealth: string[];
}

export class CreateSubmissionDto {
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
  @Type()
  @ValidateNested()
  items: Items;
}
