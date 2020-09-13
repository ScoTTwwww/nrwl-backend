import * as mongoose from 'mongoose';
//定义mongodb的数据模型
export const UsersScheme = new mongoose.Schema({
    id: String,
    userId: String,
    email: String,
    password:  {
        type: String,
        trim: true, 
        required: true,
        select: false,
      },
    type: String,
    nickname: String,
    created_at: {
        type: Date,
        default: Date.now
      },
    updated_at: {
        type: Date,
        default: Date.now
      }
});
