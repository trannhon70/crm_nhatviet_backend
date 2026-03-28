import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'hospitals' })
export class Hospitals {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: string;
    
    @Column()
    author: string;

    @Column()
    created_at: number;

}
