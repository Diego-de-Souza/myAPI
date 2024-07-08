import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContactDocument = HydratedDocument<Contato>;

@Schema()
export class Contato {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true, unique: true})
  email: string;

  @Prop({ required: true })
  telefone: number;

  @Prop({ required: true })
  tipoContato: string;

  @Prop({ required: false})
  mensagem: string;

  @Prop({ default: Date.now})
  criadoEm: Date;
}

export const ContatoSchema = SchemaFactory.createForClass(Contato);
