import { Injectable } from '@nestjs/common';
import { CreateContatoDto } from './dto/create-contato.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Contato } from './entities/contato.entity';
import { Model } from 'mongoose';

@Injectable()
export class ContatoService {
  constructor(@InjectModel('Contato') private contatoModel: Model<Contato>){}


  async criarContato(createContatoDto: CreateContatoDto){
    const contato = new this.contatoModel(createContatoDto);
    return contato.save();
  }

}
