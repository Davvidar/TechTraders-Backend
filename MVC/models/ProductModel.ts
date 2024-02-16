import { connection } from "../database/config";

const ProductModel = {

    getAllProducts: async () => {
        const [result, metadata] = await connection.query('SELECT * FROM products');
        return result;
    },
    getProduct: async (id: string) => {
        const [result, metadata] = await connection.query('SELECT * FROM products WHERE id =?', [id]);
        return result;
    },
    addProduct: async (name: string, description: string, price: number, stock: number) => {
        const [result, metadata] = await connection.query(`INSERT INTO products (product_name, product_description, price, stock)
        VALUES ('${name}', '${description}', '${price}', '${stock}')`)
        return result;

    },
    updateProduct: async (id: string, name: string, description: string, stock: number, price: number,) => {
        const [result, metadata] = await connection.query(`UPDATE products SET product_name = '${name}', product_description = '${description}', price =${price}, stock = '${stock}' WHERE id = ${id}`);
        return result;
    },
    deleteProduct: async (id: string) => {
        const [result, metadata] = await connection.query(`DELETE FROM products WHERE id = ${id}`);
        return result;
    },

}

export default ProductModel;