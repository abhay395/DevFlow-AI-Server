import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    signup(){
        return "It's for signup"
    }

    login(){
        return "It's for login"
    }
}
