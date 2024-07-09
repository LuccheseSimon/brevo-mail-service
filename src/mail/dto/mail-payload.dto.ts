interface MailPayload {
    sender: User;
    to: User[];
    subject: string;
    htmlContent?: string;
    templateId?: number;
    params?: Object;
}

interface User {
    email: string;
    name?: string;
}
