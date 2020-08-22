import { Document } from 'mongoose';
export interface User extends Document {
  readonly id: String,
  readonly userId: String,
  readonly email: String,
  readonly password: String,
  readonly type: String,
  readonly nickname: String,
  readonly created_at: Date,
  readonly updated_at: Date
}
