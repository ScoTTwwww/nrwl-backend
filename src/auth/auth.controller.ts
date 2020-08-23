import { Controller, Post, HttpStatus, HttpCode, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UsersService
    ) { }

    @Post('getToken')
    @HttpCode(HttpStatus.OK)
    getToken(@Body() ID: string) {
        return this.authService.createToken(ID);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() user: User) {
        return this.authService.login(user);
    }

    @Post('register')
    @HttpCode(HttpStatus.OK)
    register(@Body() user: User) {
        if (user.userId && user.password) {
            return this.userService.create(user);
        } else {
            return false;
        }
    }


}