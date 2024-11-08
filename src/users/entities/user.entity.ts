import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { UserType } from '../admin/enums/user-type.enum';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';

@Entity('users')  // Definindo explicitamente o nome da tabela
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nome' })
  nome: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'cpf' })
  cpf: string;

  @Column({ name: 'telefone' })
  telefone: string;

  @Column({ name: 'senha' })
  senha: string;

  @Column({ name: 'tipo_usuario' })
  tipo: UserType;

  @OneToMany(() => Vehicle, vehicle => vehicle.proprietario, { cascade: true, nullable: true })
  vehicles?: Vehicle[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
} 