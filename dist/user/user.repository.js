"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository {
    constructor() {
        this.users = [];
    }
    async getAllUsers() {
        return this.users;
    }
    getById(id) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            throw new Error('Usuário não existe');
        }
        return user;
    }
    async getUserByEmail(email) {
        const user = this.users.find((user) => user.email === email);
        return user;
    }
    async createUser(user) {
        await this.users.push(user);
    }
    async updateUser(id, data) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            throw new Error('Usuário não existe.');
        }
        Object.entries(data).forEach(([key, value]) => {
            if (key === 'id') {
                return;
            }
            user[key] = value;
        });
        return user;
    }
    async deleteUser(id) {
        const user = this.getById(id);
        this.users = this.users.filter((user) => user.id !== id);
        return user;
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)()
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map