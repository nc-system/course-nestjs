
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { UserRepository } from './users.repository' 
import { UsersService } from './users.service';


@Module({
    imports: [ TypeOrmModule.forFeature([ UserRepository ]), SharedModule ],
    providers: [UsersService]
})
export class UsersModule {}
