import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string) {
    // const user = await this.usersService.findOne(username);
    // if (user?.password !== pass) {
    //   throw new UnauthorizedException();
    // }
    // const payload = { username: user.username, sub: user.userId };
    // return {
    //   access_token: await this.jwtService.signAsync(payload),
    // };
  }

  async registerWithEmail(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (user) {
      throw new BadRequestException('email is exists');
    }

    const hash = await bcrypt.hash(password, saltOrRounds);
    const newUser = await this.usersService.create({
      name: '',
      email,
      password: hash,
    });

    return newUser;
  }

  async registerWithName(name: string, password: string) {
    const user = await this.usersService.findOneByName(name);
    if (user) {
      throw new BadRequestException('username is exists');
    }

    const hash = await bcrypt.hash(password, saltOrRounds);
    const newUser = await this.usersService.create({
      name,
      email: '',
      password: hash,
    });
    return newUser;
  }
}
