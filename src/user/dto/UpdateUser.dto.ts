import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';
import { UniqueEmail } from '../validation/unique-email.validator';

export class UpdateUserDto {
  @IsNotEmpty({ message: 'Informe um nome.' })
  @IsOptional()
  name: string;

  @IsNotEmpty({ message: 'Informe o campo email.' })
  @IsEmail()
  @UniqueEmail({ message: 'Este email já está sendo utilizado.' })
  @IsOptional()
  email: string;

  @IsNotEmpty()
  @Length(6, 8, { message: 'Senha deve conter entre 6 e 8 catacteres.' })
  @IsOptional()
  password: string;
}
