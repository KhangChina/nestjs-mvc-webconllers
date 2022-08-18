import { Controller, Post, Get, Render, UseGuards, Res, Req, Request, UseFilters } from '@nestjs/common';
import { Response, } from 'express';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { AuthenticatedGuard } from 'src/common/guards/authenticated.guard';
import { LoginGuard } from 'src/common/guards/login.guard';
import { AuthenService } from './authen.service';


@Controller('authen')
export class AuthenController {
  constructor(private readonly authenService: AuthenService) { }

  @UseGuards(LoginGuard) // check
  @Post('/login')
  // @UseFilters(new HttpExceptionFilter())
  login(@Req() req: Request, @Res() res: Response) {
    res.redirect('/dashboard')
  }

  @Get('/logout')
  logout(@Request() req, @Res() res: Response) {
    req.logout(function (err) {
      if (err) { return (err); }
      res.redirect('/login')
    });
  }


  @UseGuards(LoginGuard) // check
  @Get('/login-fail')
  @Render('authen/login-fail')
  // @UseFilters(new HttpExceptionFilter())
  login_fail(@Req() req: Request, @Res() res: Response) {
    res.redirect('/dashboard')
  }
}


