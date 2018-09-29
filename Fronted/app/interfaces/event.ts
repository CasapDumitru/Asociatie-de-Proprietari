import { User } from './user';

export interface Event {
    Id: number,
    Title: string,
    Description: string,
    Location: string,
    Date: Date,
    User: User
}