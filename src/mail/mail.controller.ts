import { Body, Controller, Get, Param, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { MailService } from './mail.service';
import { Observable } from 'rxjs';
import { MailInterceptor } from './mail.interceptor';
import { ApiKeyGuard } from 'src/api-key.guard';

@Controller("mail")
@UseInterceptors(MailInterceptor)
@UseGuards(ApiKeyGuard)
export class MailController {

    constructor(private mailService: MailService) {}

    @Get('templates')
    getTemplates(): Observable<Templates> {
        return this.mailService.getTemplates();
    }

    @Get('templates/:id')
    getTemplate(@Param('id') templateId: string): Observable<Template> {
        return this.mailService.getTemplate(templateId);
    }

    @Post()
    sendMail(@Body() payload: MailPayload): Observable<any> {
        return this.mailService.sendMail(payload);
    }
}
