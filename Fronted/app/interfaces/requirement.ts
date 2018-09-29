import { User } from './user';

export interface Requirement {
    Id: number,
    Name: string,
    Description: string,
    Date: Date,
    User: User
}