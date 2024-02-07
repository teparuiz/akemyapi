/** Creado por Rodrigo Ruiz  */
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register({
    password,
    email,
    username,
    age,
    firstName,
    lastName,
    role,
  }: RegisterDto) {
    const user = await this.usersService.findOneByEmail(email);
    if (user) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    await this.usersService.create({
      username,
      firstName,
      lastName,
      age,
      role,
      email,
      password: hashedPassword,
    });

    const userCreate = await this.usersService.findOneByEmail(email);

    const payload = { userCreate: userCreate };
    const token = await this.jwtService.signAsync(payload);

    return {
      message: 'User created successfully',
      status: true,
      data: {
        user: userCreate,
        token: token,
      },
    };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid Email');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid Password');
    }

    const payload = { email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return {
      message: 'Logged in successfully',
      status: true,
      data: {
        user: user,
        token: token,
      },
    };
  }
}
