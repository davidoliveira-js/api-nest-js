import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { UniqueEmail } from '../validation/unique-email.validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Informe um nome.' })
  name: string;

  @IsNotEmpty({ message: 'Informe o campo email.' })
  @IsEmail()
  @UniqueEmail({ message: 'Este email já está sendo utilizado.' })
  email: string;

  @IsNotEmpty()
  @Length(6, 8, { message: 'Senha deve conter entre 6 e 8 catacteres.' })
  password: string;
}
