import { Controller, Get,Post,Render, Res, UseGuards,UseFilters, Req, } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginGuard } from './common/guards/login.guard';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';
import { AuthExceptionFilter } from './common/filters/auth-exceptions.filter';
import { Response, Request} from 'express';
@Controller()
export class AppController {
  @Get('/login')
  @Render('authen/login')
  login(@Res() res: Request): { message: string } {
    return { message: "login" };
    
  }

  //@UseGuards(LoginGuard) //Login ok res session 
  // @UseGuards(AuthenticatedGuard)
  // @Get('/home')
  // @Render('home')
  // getHome(@Request() req) {
  //   return { user: req.user };
  // }

  // @UseGuards(AuthenticatedGuard)
  // @Get('/profile')
  // @Render('profile')
  // getProfile(@Request() req) {
  //   return { user: req.user };
  // }

  // @Get('/logout')
  // logout(@Request() req, @Res() res: Response) {
  //   req.logout();
  //   res.redirect('/');
  // }

}
