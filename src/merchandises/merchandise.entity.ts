import { Entity, ObjectID, ObjectIdColumn, Column , CreateDateColumn , UpdateDateColumn } from 'typeorm';
 
@Entity('merchandise')
export class Merchandise {
  @ObjectIdColumn()
  id: ObjectID;

  //商品狀態
  @Column()
  status : boolean;

  //商品名稱
  @Column()
  name : string;

  //商品英文名稱
  @Column()
  name_en: string;

  //商品介紹
  @Column()
  introduction: string;

  //商品英文介紹
  @Column()
  introduction_en: string;

  //商品照片
  @Column()
  photo: string;

  //商品價格
  @Column()
  price: number;

  //商品剩餘數量
  @Column()
  remain_count: number;

  //建立時間
  @CreateDateColumn()
  created_at: Date;

  //更新時間
  @UpdateDateColumn()
  updated_at: Date;
}
