"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor() {
        this.users = [];
    }
    async getAllUsers() {
        return this.users;
    }
    async createUser(user) {
        await this.users.push(user);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map