
import { Module } from '@nestjs/common'
import { MapperService } from './mappers.service';

@Module({
  providers: [ MapperService ],
  exports: [ MapperService ]
})
export class SharedModule {}

