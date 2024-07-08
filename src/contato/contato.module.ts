import { Module } from '@nestjs/common';
import { ContatoService } from './contato.service';
import { ContatoController } from './contato.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Contato, ContatoSchema } from './schema/contato.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Contato.name, schema: ContatoSchema}])],
  controllers: [ContatoController],
  providers: [ContatoService],
})
export class ContatoModule {}
