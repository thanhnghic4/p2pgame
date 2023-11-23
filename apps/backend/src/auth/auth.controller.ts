import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { RegisterUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: RegisterUserDto) {
    let token;
    if (signInDto?.email && signInDto?.password) {
      token = await this.authService.signInWithEmail(
        signInDto.email,
        signInDto.password,
      );
    }
    if (signInDto?.name && signInDto?.password) {
      token = await this.authService.signInWithName(
        signInDto.name,
        signInDto.password,
      );
    }
    if (token) {
      return token;
    }
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('register')
  async register(@Body() registerDto: RegisterUserDto) {
    let newUser = null;
    if (registerDto?.email && registerDto?.password) {
      newUser = await this.authService.registerWithEmail(
        registerDto.email,
        registerDto.password,
      );
    }
    if (registerDto?.name && registerDto?.password) {
      newUser = await this.authService.registerWithName(
        registerDto.name,
        registerDto.password,
      );
    }
    if (newUser) {
      return 'register success';
    }

    throw new BadRequestException();
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
