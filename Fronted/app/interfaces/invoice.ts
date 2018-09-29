import { User } from './user';

export interface Invoice {
    Id: number,
    Amount: number,
    Date: Date,
    User: User,
    IsPaid: boolean
}