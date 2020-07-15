import { Document } from 'mongoose';
export interface User extends Document {
  readonly  userName: String, 
  readonly password: String,
  readonly nickName: String,
  readonly email: String,
  readonly introduce: String,
}
 