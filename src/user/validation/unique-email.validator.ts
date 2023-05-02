import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({
  async: true,
})
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(
    value: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const user = await this.userRepository.getUserByEmail(value);
    return user === undefined ? true : false;
  }
}

export const UniqueEmail = (validationOptions: ValidationOptions) => {
  return (obtect: Object, prop: string) => {
    registerDecorator({
      target: obtect.constructor,
      propertyName: prop,
      options: validationOptions,
      constraints: [],
      validator: UniqueEmailValidator,
    });
  };
};
