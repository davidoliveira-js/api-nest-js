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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const CreateUser_dto_1 = require("./dto/CreateUser.dto");
const user_entity_1 = require("./user.entity");
const uuid_1 = require("uuid");
const GetUser_dto_1 = require("./dto/GetUser.dto");
const UpdateUser_dto_1 = require("./dto/UpdateUser.dto");
let UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAllUsers() {
        const users = await this.userRepository.getAllUsers();
        const cleanedUsers = users.map((user) => new GetUser_dto_1.GetUserDto(user.id, user.name));
        return cleanedUsers;
    }
    async createUser(data) {
        const userEntity = new user_entity_1.UserEntity();
        userEntity.id = (0, uuid_1.v4)();
        userEntity.name = data.name;
        userEntity.email = data.email;
        userEntity.password = data.password;
        this.userRepository.createUser(userEntity);
        return {
            user: new GetUser_dto_1.GetUserDto(userEntity.id, userEntity.name),
        };
    }
    async updateUser(id, data) {
        const updatedUser = await this.userRepository.updateUser(id, data);
        return {
            user: updatedUser.id,
        };
    }
    async deleteUser(id) {
        const deletedUser = await this.userRepository.deleteUser(id);
        return { user: deletedUser.id };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateUser_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map