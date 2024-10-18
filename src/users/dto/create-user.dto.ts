import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from 'class-validator';

export class CreateUserDto {
  @IsEmail() // ? Valida que sea un email
  @IsString()
  @IsNotEmpty() //? Valida que el campo no esté vacío
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Max(100)
  age: number;
}
