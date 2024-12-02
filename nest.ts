import { Controller, Get } from '@nestjs/common';  
import { NestFactory } from '@nestjs/core';  
import { Module } from '@nestjs/common';  

@Controller('users')  
class UserController {  
    @Get()  
    getUsers() {  
        return [{ id: 1, name: 'John Doe' }];  
    }  
}  

@Module({ controllers: [UserController] })  
class AppModule {}  

async function bootstrap() {  
    const app = await NestFactory.create(AppModule);  
    await app.listen(3000);  
}  

bootstrap();  
