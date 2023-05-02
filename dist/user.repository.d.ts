export declare class UserRepository {
    private users;
    getAllUsers(): Promise<any[]>;
    createUser(user: any): Promise<void>;
}
