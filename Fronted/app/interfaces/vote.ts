import { User } from "./user";

export interface Vote {
    Id: number,
    User: User,
    Content: string,
    NumberOfVotes: number,
    Status: boolean,
    Date: Date
}