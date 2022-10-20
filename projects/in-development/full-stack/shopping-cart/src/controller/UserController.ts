import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { userDTO } from "../model/user"

export class UserController {
    constructor(
        private userBusiness = new UserBusiness()
    ) {
        userBusiness = this.userBusiness
    }
    public getUserById = async (req: Request, res: Response) => {
        try {
            const id = req.body.id
            const result = await this.userBusiness.getUserById(id)
            res.status(200).send(result)
        } catch (error: any) {
            res.end(error.message)
        }
    }

    public createUser = async (req: Request, res: Response) => {
        try {
            const {
                userName,
                email,
                nickname,
                password,
                role
            } = req.body

            const input: userDTO = {
                userName,
                email,
                nickname,
                password,
                role
            }
            await this.userBusiness.createUser(input)

            res.status(200).send("User created!")
        } catch (error: any) {
            res.end(error.message)
        }
    }
}