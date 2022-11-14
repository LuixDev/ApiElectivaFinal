import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import passport from 'passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy,'local'){
constructor(private authSerivice: AuthService){
    super({
    uusernameField: 'email',
    passwordField:  'password',
    });
}
async validate (email: string, password: string){
    const user = await this.authSerivice.validateUser(email, password);
    if  (!user){
throw new UnauthorizedException('Contraseña o Usuario Invalido');
    }
    return user;
}
}