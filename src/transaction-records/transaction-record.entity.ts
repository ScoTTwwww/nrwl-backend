import { Entity, ObjectID, ObjectIdColumn, Column , CreateDateColumn , UpdateDateColumn } from 'typeorm';
 
@Entity('transactionRecord')
export class TransactionRecord {
  @ObjectIdColumn()
  //交易編號
  id: ObjectID;

  //使用者編號
  @Column()
  user_id : number;

  //商品編號
  @Column()
  merchandise_id: number;

  //當時購買價格
  @Column()
  price: number;

  //購買數量
  @Column()
  buy_count: number;

  //交易總金額
  @Column()
  total_price: number;

  //建立時間
  @CreateDateColumn()
  created_at: Date;

  //更新時間
  @UpdateDateColumn()
  updated_at: Date;
}
