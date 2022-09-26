
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mappers.service';
import { UserDto } from './dto/user.dto';
import { User } from './users.entity';
import { UserRepository } from './users.repository';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserRepository)
        private readonly _userRepository: UserRepository,
        private readonly _mapperService: MapperService
    ) { }

    // Get User All
    async getAll(id: number): Promise<UserDto[]> {

        const users: User[] = await this._userRepository.find({ where: { status: 'ACTIVE' } })

        return this._mapperService.mapCollection<User, UserDto>(users, new UserDto())

    }

    // Get User By ID
    async getId(id: number): Promise<UserDto> {

        if (!id) {
            throw new BadRequestException('id must be sent')
        }

        const user: User = await this._userRepository.findOne(id, { where: { status: 'ACTIVE' } })

        if (!user) {
            throw new NotFoundException()
        }

        return this._mapperService.map<User, UserDto>(user, new UserDto())

    }

    // 

}
