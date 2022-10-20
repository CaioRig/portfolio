import { UserDatabase } from "../data/UserDatabase"
import { IdNotFound } from "../error/IdNotFound"
import { MissingParams } from "../error/MissingParams"
import { userDTO, userRole } from "../model/user"
import { generateId } from "../services/generateId"

export class UserBusiness {
    constructor(
        private userDatabase = new UserDatabase()
    ) {
        userDatabase = this.userDatabase
    }
    public getUserById = async (id: string) => {
        const userId = id
        try {
            if (!userId) {
                throw new MissingParams()
            }
            const result = await this.userDatabase.getUserById(userId)
            if (result.length === 0) {
                throw new IdNotFound()
            }
            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public createUser = async (input: userDTO) => {
        try {
            const {
                userName,
                email,
                nickname,
                password,
            } = input
            let role = input.role

            if (!userName || !email || !nickname || !password) {
                throw new MissingParams()
            }
            if (!role) {
                role = userRole.NORMAL
            }
            const userId = generateId()

            const newUser = {
                userName,
                email,
                nickname,
                password,
                role
            }
            await this.userDatabase.createUser(newUser, userId)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}