import { Controller, Post, Get, Render, UseGuards, Res, Req, Redirect } from '@nestjs/common';
import { Response, Request } from 'express';
import { LoginGuard } from 'src/common/guards/login.guard';
import { AuthenService } from './authen.service';
import { CreateAuthenDto } from './dto/create-authen.dto';
import { UpdateAuthenDto } from './dto/update-authen.dto';
import  { SessionSerializer }  from './session.serializer';

@Controller('authen')
export class AuthenController {
  constructor(private readonly authenService: AuthenService) { }

  @UseGuards(LoginGuard) // check
  @Post('/login')
  login(@Req() req: Request,@Res() res: Response) {
    //const data: any = req.body
    // // console.log(data)
    // const username = data.username
    // const password = data.password
    // console.log(username + " - " + password) 
    // //res.session.save({username})
    // res.redirect('/dashboard');
    res.redirect('/dashboard')
  }
}

