
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/users.entity";

@Entity('roles')
export class Role extends BaseEntity {
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 20, nullable: false})
    name: string

    @Column({ type: 'text', nullable: false })
    description: string

    @Column({ type: 'timestamp', name:'created_at' })
    createdAt: Date

    @Column({ type: 'timestamp', name:'updated_at' })
    updatedAt: Date

    // Relations
    @ManyToOne( type => User , user => user.roles )
    @JoinColumn()
    users: User[]

}