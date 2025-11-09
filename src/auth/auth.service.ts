import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }
     signup(data: RegisterDto){
        const {name,email,password} = data
        const user =  this.prisma.user.create({
            data:{
                name: name,
                email: email,
                password: password,
            }
        })
        return user;
    }

    login(data:LoginDto){
       const {email ,password} = data
    //    const user = this.prisma.
    }
}
