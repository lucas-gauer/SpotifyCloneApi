/* 
  This interceptor maps all errors thrown from services and turns them into http exceptions
*/

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  NotFoundException,
  ConflictException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        switch (err.name) {
          case 'EntityNotFound':
            return throwError(new NotFoundException(err.message));
          case 'DuplicatedEntry':
            return throwError(new ConflictException(err.message));
          case 'InvalidInput':
            return throwError(new UnprocessableEntityException(err.message));
          default:
            return throwError(err);
        }
      }),
    );
  }
}
