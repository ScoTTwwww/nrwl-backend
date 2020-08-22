import * as mongoose from 'mongoose';
//定义mongodb的数据模型
export const UsersScheme = new mongoose.Schema({
    id: String,
    userId: String,
    email: String,
    password: String,
    type: String,
    nickname: String,
    created_at: Date,
    updated_at: Date
});
