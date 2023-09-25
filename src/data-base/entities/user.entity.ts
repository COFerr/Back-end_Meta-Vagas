import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { IsEmail } from 'class-validator';
  import { InternalServerErrorException } from '@nestjs/common';
  import * as bcrypt from 'bcrypt';
  import { Vacancy } from './vacancy.entity';
  
  @Entity('user')
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'character varying', nullable: false, unique: true })
    @IsEmail()
    email: string;
  
    @Column({ type: 'character varying', nullable: false, select: false })
    password: string;
  
    @Column({ type: 'bool', default: true })
    isActive: boolean;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @OneToMany(() => Vacancy, (vacancy) => vacancy.user)
    vacancy: Vacancy[];
  
    @BeforeInsert()
    @BeforeUpdate()
    public async passwordHash(password: string) {
      try {
        if (password || this.password) {
          this.password = await bcrypt.hash(password || this.password, 10);
        }
      } catch (error) {
        throw new InternalServerErrorException('Error on password hash.');
      }
    }
  }