import { Request, Response } from "express";
import CategoryModel from "../models/CategoryModel";

const ProductController = {

    getAllCategories: async (req: Request, res: Response) => {
        try {
            const categories = await CategoryModel.getAllCategories();
            res.json(categories);

        } catch (error) {

        }
    },
    getCategory: async (req: Request, res: Response) => { 
    
        try {
            const id = req.params.id;
            const category = await CategoryModel.getCategory(id);
            if (!Array.isArray(category) || category.length === 0) {
                res.status(404).json({ message: 'No se encontró la categoría' });
                return
            }
            res.json(category);
        } catch (error) {
            console.log(error)
        }

    },

    addCategory: async (req: Request, res: Response) => {
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ message: 'Faltan datos' });
            return;
        }
        const result = await CategoryModel.addCategory(name);
        res.send(result);
     },

     
    updateCategory: async (req: Request, res: Response) => {
        const id = req.params.id;
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ message: 'Faltan datos' });
            return;
        }
      const result =  await CategoryModel.updateCategory(id, name);
        res.send(result);
     },
    deleteCategory: async (req: Request, res: Response) => { 
        try {
            const id = req.params.id;
            await CategoryModel.deleteCategory(id);    
            res.json({ message: 'Categoría eliminada' });
        } catch (error) {
            console.log(error)
        }
    }
}

export default ProductController;