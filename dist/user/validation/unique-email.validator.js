"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueEmail = exports.UniqueEmailValidator = void 0;
const class_validator_1 = require("class-validator");
const user_repository_1 = require("../user.repository");
const common_1 = require("@nestjs/common");
let UniqueEmailValidator = class UniqueEmailValidator {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async validate(value, validationArguments) {
        const user = await this.userRepository.getUserByEmail(value);
        return user === undefined ? true : false;
    }
};
UniqueEmailValidator = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({
        async: true,
    }),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UniqueEmailValidator);
exports.UniqueEmailValidator = UniqueEmailValidator;
const UniqueEmail = (validationOptions) => {
    return (obtect, prop) => {
        (0, class_validator_1.registerDecorator)({
            target: obtect.constructor,
            propertyName: prop,
            options: validationOptions,
            constraints: [],
            validator: UniqueEmailValidator,
        });
    };
};
exports.UniqueEmail = UniqueEmail;
//# sourceMappingURL=unique-email.validator.js.map