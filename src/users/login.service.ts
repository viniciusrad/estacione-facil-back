import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

interface LoginResponse {
  erro: boolean;
  mensagem?: string;
  usuario?: Partial<User>;
}

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async verificarLogin(email: string, senha: string): Promise<LoginResponse> {
    try {
        console.log(email, senha);
      const usuario = await this.userRepository.findOne({
        where: {
          email: email,
          senha: senha
        },
        select: ['id', 'nome', 'email', 'cpf', 'telefone', 'tipo'] // Não retorna a senha
      });

      if (!usuario) {
        return {
          erro: true,
          mensagem: 'Usuário não encontrado ou senha incorreta'
        };
      }

      return {
        erro: false,
        usuario: usuario
      };
      
    } catch (error) {
      return {
        erro: true,
        mensagem: 'Erro ao verificar login: ' + error.message
      };
    }
  }
}
