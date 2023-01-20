import { Column, Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    admin_id: string;

    @Column()
    title:string;

    @Column()
    image:string;

    @Column({default: 0})
    likes:number;
}