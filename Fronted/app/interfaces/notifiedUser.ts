import { User } from './user';
import { SmartHome } from './smartHome';

export interface NotifiedUser {
    Id: number,
    User: User,
    Date: Date,
    SmartHome: SmartHome
}