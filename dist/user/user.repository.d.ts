import { UserEntity } from './user.entity';
export declare class UserRepository {
    private users;
    getAllUsers(): Promise<UserEntity[]>;
    private getById;
    getUserByEmail(email: string): Promise<UserEntity>;
    createUser(user: UserEntity): Promise<void>;
    updateUser(id: string, data: Partial<UserEntity>): Promise<UserEntity>;
    deleteUser(id: string): Promise<UserEntity>;
}
