import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum TipoCobranca {
    DIARIA = 'DIARIA',
    HORA = 'HORA'
}

@Entity('agendamentos')
export class Agendamento {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    clienteId: string;

    @Column()
    vagaId: string;

    @Column({ type: 'enum', enum: TipoCobranca })
    tipoCobranca: TipoCobranca;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    preco: number;

    @Column({ type: 'timestamp' })
    dataInicio: Date;

    @Column({ type: 'timestamp' })
    dataFim: Date;

    @Column({ type: 'time', nullable: true })
    horarioInicio?: string;

    @Column({ type: 'time', nullable: true })
    horarioFim?: string;

    @Column({ type: 'boolean', default: false })
    cancelado: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
} 