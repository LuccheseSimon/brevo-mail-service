/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { HttpModule } from '@nestjs/axios';


@Module({
    imports: [HttpModule],
    controllers: [MailController],
    providers: [MailService],
})
export class MailModule {}
