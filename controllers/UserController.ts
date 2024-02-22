import { Request, Response } from "express";
import { connection } from "../database/config";
import UserModel from "../models/UserModel";

const UserController = {

    getAllUsers: async (req: Request, res: Response) => {
        try {
            const users = await UserModel.getAllUsers();
            res.json(users);

        } catch (error) {

        }
    },
    getUser: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const user = await UserModel.getUser(id);
            if (!Array.isArray(user) || user.length === 0) {
                res.status(404).json({ message: 'No se encontró el usuario' });
                return
            }
            res.json(user);
        } catch (error) {
            console.log(error)
        }
    },
    addUser: async (req: Request, res: Response) => {
        const { username, telephone, email, pass } = req.body;
        if (!username || !telephone || !email || !pass) {
            res.status(400).json({ message: 'Faltan datos' });
            return;
        }
        await UserModel.addUser(username, telephone, email, pass);
    },

    updateUser: async (req: Request, res: Response) => {
        const { id } = req.params;
        const { username, telephone, email, pass } = req.body;
        if (!username || !telephone || !email || !pass) {
            res.status(400).json({ message: 'Faltan datos' });
            return;
        }
        await UserModel.updateUsers(id, username, telephone, email, pass);
    },
    deleteUser: async (req: Request, res: Response) => {
        const { id } = req.params;
        await UserModel.deleteUsers(id);


    },

    loginUser: async (req: Request, res: Response) => {

        const { username, pass, email } = req.body;
        if (!username ||!pass || !email) {
            res.status(400).json({ message: 'Faltan datos' });
            return;
        }
        try {
            const user = await UserModel.loginUser(username, pass, email);

            if (!Array.isArray(user) || user.length === 0) {
                res.status(404).json({ message: 'No se encontró el usuario' });
                return
            }
            res.json(user);

        } catch (error) {
            console.log(error)
        }
    }
}

export default UserController;


