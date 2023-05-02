import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { UserRepository } from '../user.repository';
export declare class UniqueEmailValidator implements ValidatorConstraintInterface {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(value: string, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const UniqueEmail: (validationOptions: ValidationOptions) => (obtect: Object, prop: string) => void;
