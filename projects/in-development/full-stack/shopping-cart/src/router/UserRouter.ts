import express from "express";
import { UserController } from "../controller/UserController";

export const UserRouter= express.Router()

const userController = new UserController()

UserRouter.get('/id', userController.getUserById)

UserRouter.post('/create', userController.createUser)