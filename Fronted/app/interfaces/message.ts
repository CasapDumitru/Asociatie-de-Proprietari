import { User } from './user';

export interface Message {
    Id: number,
    Text: string,
    Date: Date,
    User: User,
    ConversationId: number
}