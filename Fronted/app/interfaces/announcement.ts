import { User } from "./user";

export interface Announcement {
    Id: number,
    User: User,
    Title: string,
    Content: string,
    Date: Date
}