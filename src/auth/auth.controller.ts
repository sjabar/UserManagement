import {
  Controller,
  UseGuards,
  Request,
  Post,
  HttpCode,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
//import bcrypt from 'bcryptjs';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log(req);
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() body: { username: string; password: string }) {
    //const hashed = await bcrypt.hash(body.password, 10);
    const hashed = body.password;
    return this.usersService.create(body.username, hashed);
  }
}
