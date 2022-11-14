import{ IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString} from'class-validator';
export class CreateUserDto{
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
    @IsString()
    @IsNotEmpty()
    password: string;
    @IsString()
    @IsOptional()
    readonly name: string;
    @IsString()
    @IsOptional()
    readonly lastname?: string;
    @IsString()
    @IsOptional()
    readonly identification?: string;
    @IsString()
    @IsOptional()
    readonly picture?: string;
    @IsString()
    @IsOptional()
    readonly phone?: string;
    @IsString()
    @IsOptional()
    readonly gender?: string;
    @IsString()
    @IsOptional()
    readonly birthday?: string;
    @IsString()
    @IsOptional()
    readonly country?: string;
    @IsString()
    @IsOptional()
    readonly state?: string;
    @IsString()
    @IsOptional()
    readonly city?: string;
    @IsString()
    @IsOptional()
    readonly address?: string;
    @IsString()
    @IsBoolean()
    readonly active?: boolean;
}