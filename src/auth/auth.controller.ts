import { Controller, Post, HttpStatus, HttpCode, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('getToken')
    @HttpCode(HttpStatus.OK)
    getToken(@Body() ID: string) {
        return this.authService.createToken(ID);
    }
}