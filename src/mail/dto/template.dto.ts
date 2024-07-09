interface Sender {
    name: string;
    email: string;
    id: number;
  }
  
interface Template {
    id: number;
    name: string;
    subject: string;
    isActive: boolean;
    testSent: boolean;
    sender: Sender;
    replyTo: string;
    toField: string;
    tag: string;
    htmlContent: string;
    createdAt: string;
    modifiedAt: string;
  }
  
interface Templates {
    count: number;
    templates: Template[];
}