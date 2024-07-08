import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateContatoDto {
    @IsString()
    readonly nome: string;
    
    @IsEmail()
    readonly email: string;

    @IsNumber()
    readonly telefone: number;

    @IsString()
    readonly tipoContato: string;

    @IsString()
    readonly mensagem: string;
    
}
