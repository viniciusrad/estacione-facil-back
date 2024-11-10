import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Cartao {
    @PrimaryGeneratedColumn('increment')
    id?: number;

    @Column({ length: 20 })
    nomeNoCartao: string;
    
    @Column({ length: 20 })
    numeroCartao: string;

    @Column({ length: 3 })
    codigoVerificacao: string;

    @Column()
    salvarParaFuturos: boolean;

    @Column()
    validade: Date;

    @Column()
    userId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}