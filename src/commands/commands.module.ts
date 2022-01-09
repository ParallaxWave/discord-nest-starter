import { Module } from '@nestjs/common';
import { FunModule } from './fun/fun.module';

@Module({
  imports: [FunModule]
})
export class CommandsModule {}
