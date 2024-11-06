import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserType } from '../admin/enums/user-type.enum';

@Entity('users')  // Definindo explicitamente o nome da tabela
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nome' })
  readonly nome: string;

  @Column({ name: 'email' })
  readonly email: string;

  @Column({ name: 'cpf' })
  readonly cpf: string;

  @Column({ name: 'telefone' })
  readonly telefone: string;

  @Column({ name: 'senha' })
  readonly senha: string;

  @Column({ name: 'tipo_usuario' })
  readonly tipo: UserType;

  @Column({ name: 'created_at' })
  readonly createdAt: Date;

  @Column({ name: 'updated_at' })
  readonly updatedAt: Date;
} 