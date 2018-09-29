import { UserType } from './userType';

export interface User {
    Id: number,
    FirstName: string,
    LastName: string,
    UserName: string,
    Password: string,
    Email: string,
    UserType: UserType
}