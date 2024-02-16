import { connection } from "../database/config";

const CategoryModel = {

    getAllCategories: async () => {
        const [result, metadata] = await connection.query('SELECT * FROM category');
        return result;
    },
    getCategory: async (id: string) => {
        const [result, metadata] = await connection.query('SELECT * FROM category WHERE id =?', [id]);
        return result;
    },
    addCategory: async (name: string) => {

        const [result, metadata] = await connection.query(`INSERT INTO category (category_name) VALUES ('${name}')`);
        return result;

    },

    updateCategory: async (id: string, name: string) => {
        const [result, metadata] = await connection.query(`UPDATE category SET category_name = '${name}' WHERE id = ${id}`);
        return result;
    },

    deleteCategory: async (id: string) => {
        const [result, metadata] = await connection.query(`DELETE FROM category WHERE id = ${id}`);
        return result;
    },
    


}

export default CategoryModel;