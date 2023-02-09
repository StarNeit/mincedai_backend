import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  surname: string;

  @IsString()
  birth_date: string;

  @IsEmail()
  email: string;
}
