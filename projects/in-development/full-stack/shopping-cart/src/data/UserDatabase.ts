import { userDTO } from "../model/user"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    private TABLE_NAME = 'Shopper_users'
    public getUserById = async (id: string) => {
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .select('*')
                .where({ id })

            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public createUser = async (input: userDTO,
        id: string
    ) => {
        try {
            await UserDatabase.connection(this.TABLE_NAME)
                .insert({
                    user_id: id,
                    user_name: input.userName,
                    email: input.email,
                    nickname: input.nickname,
                    password: input.password,
                    role: input.role
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}