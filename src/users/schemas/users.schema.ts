import * as mongoose from 'mongoose';
//定义mongodb的数据模型
export const UsersScheme = new mongoose.Schema({
    userName: String, 
    password: String,
    nickName: String,
    email: String,
    introduce: String,
});
