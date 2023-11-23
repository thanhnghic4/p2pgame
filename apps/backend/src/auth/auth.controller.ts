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
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('register')
  register(@Body() registerDto: RegisterUserDto) {
    if (registerDto?.email && registerDto?.password) {
      return this.authService.registerWithEmail(
        registerDto.email,
        registerDto.password,
      );
    }
    if (registerDto?.name && registerDto?.password) {
      return this.authService.registerWithName(
        registerDto.name,
        registerDto.password,
      );
    }

    throw new BadRequestException();
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
