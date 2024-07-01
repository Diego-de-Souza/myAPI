import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContatoModule } from './contato/contato.module';

@Module({
  imports: [ContatoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
