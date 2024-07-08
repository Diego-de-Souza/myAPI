import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContatoModule } from './contato/contato.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

@Module({
  imports: [
    ContatoModule,
    MongooseModule.forRoot(process.env.MONGODB_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
