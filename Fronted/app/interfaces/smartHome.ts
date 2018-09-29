import { User } from './user';

export interface SmartHome {
    Id: number,
    IsActivated: boolean,
    Ip: string,
    User: User
}