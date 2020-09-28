import * as jwt from 'jsonwebtoken';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/user.entity';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as crypto from 'crypto';


@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private usersService: UsersService
    ) { }

    createToken(id: String) {
        //token到期時間
        const expiresIn = "2h";
        const secret = 'scottisgod';
        const token = jwt.sign({ userId: id }, secret, { expiresIn: expiresIn });

        /*  return {
             expires_in: expiresIn,
             token: token
         } */

        return {
            access_token: this.jwtService.sign({ userId: id }),
        };
    }

    public async validate(payload: object): Promise<boolean> {
        //給定where條件，依據token payload的ID作為where條件。
        let queryCondition = { where: { ID: payload['ID'] } };
        //const user = await this.usersServices.findOne(queryCondition);
        //有該筆資料，回傳true
        if (true) {
            return true;
        }
        //沒該筆資料回傳false
        else {
            return false;
        }
    }


    async validateUser(username: string, pass: string): Promise<any> {
        // const user = await this.usersService.findOne(username);
        if (true) {
            return { 'user': 'fk' };
        }
        return null;

        if (true) {
            return true;
        }
        //沒該筆資料回傳false
        else {
            return false;
        }
    }

    async login(user: User) {
        const payload = {
            userId: user.userId,
            username: user.nickname,
            type: user.type,
        };

        user.password = this.encrypt(user.password);
        const userData = await this.usersService.findOne(user);

        console.log(userData)
        if (userData) {
            return {
                userInfo: userData,
                access_token: this.jwtService.sign(payload)
            };
        } else {
            return false;
        }

    }


    encrypt(password: string) {
        const mypassword = "WTF"
        const mykey = crypto.createCipher('aes-128-cbc', mypassword);
        let mystr = mykey.update(password, 'utf8', 'hex')
        mystr += mykey.final('hex');
        return mystr;
    }

}