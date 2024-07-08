import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContatoService } from './contato.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';

@Controller('contato')
export class ContatoController {
  constructor(private readonly contatoService: ContatoService) {}

  @Post()
  async criaContato(@Body() createContatoDto: CreateContatoDto) {
    return this.contatoService.criarContato(createContatoDto);
  }


}
