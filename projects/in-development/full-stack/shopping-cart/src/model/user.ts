export interface userDTO {
    userName: string,
    email: string,
    nickname: string,
    password: string,
    role: userRole
}

export enum userRole {
    ADMIN = 'ADMIN', 
    NORMAL = 'NORMAL'
}