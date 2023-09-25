import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { User } from './user.entity';
  
  @Entity('vacancy')
  export class Vacancy {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'int', nullable: false })
    wage: number;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @ManyToOne(() => Vacancy, (user) => user.vacancy)
    user?: User;
  }