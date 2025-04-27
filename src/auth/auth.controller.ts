import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('signup')
    async signup(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        return this.authService.signup(name, email, password);
    }


    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        const user = await this.authService.login(email, password);
        if (!user) {
            return { message: 'Invalid credentials' };
        }
        return user;
    }

    @Get('user/:id')
    async getUser(@Param('id') id: string) {
        return this.authService.getUserById(id);
    }
}
