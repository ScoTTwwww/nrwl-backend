import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  //E-mail
  @Column()
  email: string;

  //密碼
  @Column()
  password: string;

  //帳號類型
  @Column()
  type: string;

  //暱稱
  @Column()
  nickname: string;

  //建立時間
  @CreateDateColumn()
  created_at: Date;

  //更新時間
  @CreateDateColumn()
  updated_at: Date;
}