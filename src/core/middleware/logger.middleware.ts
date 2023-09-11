import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    
    // condição de check
    if (req.headers['api-token'] != "my-token") {
      throw new UnauthorizedException('Acesso não autorizado')
    }
    next();
  }
}