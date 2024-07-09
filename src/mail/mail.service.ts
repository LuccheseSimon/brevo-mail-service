import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, catchError, firstValueFrom, map } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class MailService { 
    constructor(private readonly httpService: HttpService){}

    getTemplates(): Observable<any> {
        const url = `${process.env.BREVO_SMTP_BASE_URL}/templates`;
        return this.httpService.get<Templates>(url);
    }

    getTemplate(templateId: string): Observable<any> {
        const url = `${process.env.BREVO_SMTP_BASE_URL}/templates/${templateId}`;
        return this.httpService.get<Template>(url);
    }

    sendMail(payload: MailPayload): Observable<any> {
        const url = `${process.env.BREVO_SMTP_BASE_URL}/email`;
        return this.httpService.post(url, payload);
    }
}
