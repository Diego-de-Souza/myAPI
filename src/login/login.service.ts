import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@Injectable()
export class LoginService {
  create(createLoginDto: CreateLoginDto) {
    const dados = {
      usuario:createLoginDto.username,
      senhaHash: createLoginDto.password
    }
    return dados;
  }

  logaPortal(confirmaAcess:Boolean, createContatoDto: CreateLoginDto){
    const dadosAcesso = {
      usuario: createContatoDto.username,
      senhaHash: createContatoDto.password,
      status_acesso: confirmaAcess
    }
    return dadosAcesso
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
