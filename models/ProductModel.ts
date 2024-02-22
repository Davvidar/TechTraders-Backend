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
    getProductByCategory: async (name: string) => {
        const [result, metadata] = await connection.query(`SELECT p.id , p.product_name, p.product_description, p.price, p.stock, p.product_image, c.category_name FROM products p, category c WHERE p.category_id = c.id AND c.category_name = '${name}'`);
        return result;
    },

    addProduct: async (name: string, description: string, price: number, stock: number, category_id:number, ) => {
        const [result, metadata] = await connection.query(`INSERT INTO products (product_name, product_description, price, stock, category_id)
        VALUES ('${name}', '${description}', ${price}, ${stock}, ${category_id})`)
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