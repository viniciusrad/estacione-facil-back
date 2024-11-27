import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DadosBancarios {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  banco: string;

  @Column()
  agencia: string;

  @Column()
  contaCorrente: string;

  @Column()
  userId: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataCriacao: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataAtualizacao: Date;
} 