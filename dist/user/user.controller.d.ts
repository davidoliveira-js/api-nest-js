import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/CreateUser.dto';
import { GetUserDto } from './dto/GetUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
export declare class UserController {
    private userRepository;
    constructor(userRepository: UserRepository);
    getAllUsers(): Promise<GetUserDto[]>;
    createUser(data: CreateUserDto): Promise<{
        user: GetUserDto;
    }>;
    updateUser(id: string, data: UpdateUserDto): Promise<{
        user: string;
    }>;
    deleteUser(id: string): Promise<{
        user: string;
    }>;
}
