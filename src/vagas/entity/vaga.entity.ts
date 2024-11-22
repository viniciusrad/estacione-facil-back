import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum TipoVaga {
  AMBAS = 'ambas',
  COBERTA = 'coberta',
  DESCOBERTA = 'descoberta',
}

export enum TipoContratacao {
  AMBAS = 'ambas',
  HORA = 'hora',
  DIARIA = 'diaria',
}

export enum StatusVaga {
  DISPONIVEL = 'disponivel',
  INDISPONIVEL = 'indisponivel',
}

@Entity()
export class Vaga {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({
    type: 'enum',
    enum: TipoVaga,
  })
  tipoVaga: TipoVaga;

  @Column({
    type: 'enum',
    enum: TipoContratacao,
  })
  tipoContratacao: TipoContratacao;

  @Column()
  endereco: string;

  @Column()
  descricao: string;

  @Column("simple-array")
  fotos: string[];

  @Column({ nullable: true })
  precoHora?: string;

  @Column({ nullable: true })
  horaInicio?: string;

  @Column({ nullable: true })
  horaFim?: string;

  @Column({ nullable: true })
  precoDiaria?: string;

  @Column("simple-array", { nullable: true })
  diasDisponiveis?: string[];

  @Column()
  proprietarioId: string;

  @Column({
    type: 'enum',
    enum: StatusVaga,
  })
  status: StatusVaga;

  @CreateDateColumn()
  dataCriacao: Date;

  @UpdateDateColumn()
  dataAtualizacao: Date;
}
