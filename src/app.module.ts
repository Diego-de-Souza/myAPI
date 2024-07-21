import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContatoModule } from './contato/contato.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    ContatoModule,
    MongooseModule.forRoot(process.env.MONGODB_URI),
    LoginModule,
    // TypeOrmModule.forRoot({
    //   type: 'mssql',
    //   host: process.env.SQL_SERVER_HOST, // Adicione suas variáveis de ambiente
    //   port: parseInt(process.env.SQL_SERVER_PORT, 10) || 1433,
    //   username: process.env.SQL_SERVER_USER,
    //   password: process.env.SQL_SERVER_PASSWORD,
    //   database: process.env.SQL_SERVER_DATABASE,
    //   synchronize: true, // Usar com cuidado em produção
    //   options: {
    //     encrypt: true,
    //     trustServerCertificate: true,
    //   },
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
