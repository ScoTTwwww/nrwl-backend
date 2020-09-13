import { Document } from 'mongoose';
export interface User extends Document {
    readonly id: string,
    readonly userId: string,
    readonly email: string,
    readonly password: string,
    readonly type: string,
    readonly nickname: string,
    readonly created_at: Date,
    readonly updated_at: Date
}
