import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from  '../config';
import { JwtStrategy } from './jwt.strategy';



@Module({
 
  imports: [UsersModule, PassportModule,
  JwtModule.registerAsync({
    inject: [config.KEY],
    useFactory: (configService: ConfigType<typeof config>)=>{
      return {

        secret: configService.jwtSecret,
        signOptions: {
          expiresIn: '10d',
        },
      };
    }, 
}),
  ],

controllers: [AuthController],
providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
