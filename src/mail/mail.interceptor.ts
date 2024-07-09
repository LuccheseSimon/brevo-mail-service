import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import axios, { AxiosError } from 'axios';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class MailInterceptor implements NestInterceptor {
  private readonly logger = new Logger(MailInterceptor.name);

  intercept<T>(context: ExecutionContext, next: CallHandler): Observable<T> {
    axios.interceptors.request.use(config => {
      config.headers['api-key'] = process.env.BREVO_API_KEY;
      config.headers['content-type'] = 'application/json';
      this.logger.log(JSON.stringify(config));
      return config;
    });
    return next
      .handle()
      .pipe(map((res) => res.data))
      .pipe(catchError((e: AxiosError) => {console.log(e.response?.data); throw 'Error ' + e.message;}));
  }
}
