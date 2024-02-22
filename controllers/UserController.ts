import { Request, Response } from "express";
import UserModel from "../models/UserModel";

const UserController = {
    getAllUsers: async (req: Request, res: Response) => {
        try {
            const users = await UserModel.getAllUsers();
            res.json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al obtener los usuarios' });
        }
    },
    getUser: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const user = await UserModel.getUser(id);
            if (!Array.isArray(user) || user.length === 0) {
                res.status(404).json({ message: 'No se encontró el usuario' });
                return;
            }
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al obtener el usuario' });
        }
    },
    addUser: async (req: Request, res: Response) => {
        const { username, email, pass } = req.body;
        if (!username || !email || !pass) {
            res.status(400).json({ message: 'Faltan datos' });
            return;
        }
        try {
            await UserModel.addUser(username, email, pass);
            res.status(201).json({ message: 'Usuario creado exitosamente' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al crear el usuario' });
        }
    },
    updateUser: async (req: Request, res: Response) => {
        const { id } = req.params;
        const { username, email, pass } = req.body;
        if (!username || !email || !pass) {
            res.status(400).json({ message: 'Faltan datos' });
            return;
        }
        try {
            await UserModel.updateUser(id, username, email, pass);
            res.json({ message: 'Usuario actualizado exitosamente' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al actualizar el usuario' });
        }
    },
    deleteUser: async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            await UserModel.deleteUser(id);
            res.json({ message: 'Usuario eliminado exitosamente' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al eliminar el usuario' });
        }
    },
    loginUser: async (req: Request, res: Response) => {
        const { username, pass, email } = req.body;
        if (!username || !pass || !email) {
            res.status(400).json({ message: 'Faltan datos' });
            return;
        }
        try {
            const user = await UserModel.loginUser(username, pass, email);
            if (!Array.isArray(user) || user.length === 0) {
                res.status(404).json({ message: 'No se encontró el usuario' });
                return;
            }
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al iniciar sesión' });
        }
    }
}

export default UserController;