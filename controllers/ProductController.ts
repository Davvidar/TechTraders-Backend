import { Request, Response } from "express";
import ProductModel from "../models/ProductModel";

const ProductController = {
    getAllProducts: async (req: Request, res: Response) => {
        try {                               
            const products = await ProductModel.getAllProducts();
            res.json(products);

        } catch (error) {
            console.log(error)
        }
    },
    getProduct: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const product = await ProductModel.getProduct(id);
            if (!Array.isArray(product) || product.length === 0) {
                res.status(404).json({ message: 'No se encontró el producto' });
                return
            }
            res.json(product);
        } catch (error) {
            console.log(error)
        }
    },
    getProductByCategory: async (req: Request, res: Response) => {
        try {
            const name = req.params.name;
            const products = await ProductModel.getProductByCategory(name); 
            if (!Array.isArray(products) || products.length === 0) {
                res.status(404).json({ message: 'No se encontraron productos para esta categoría' });
                return;
            }
            res.json(products);
        } catch (error) {
            console.log(error)
        }
    },


    addProduct: async (req: Request, res: Response) => {
        console.log(req.body);
        const { name, description, price, stock, category_id } = req.body;
        if (!name || !description || !price || !stock ||!category_id) {
            res.status(400).json({ message: 'Faltan datos' });
            return;
        }
        const result = await ProductModel.addProduct(name, description, price, stock, category_id);
        res.send(result);
    },


    updateProduct: async (req: Request, res: Response) => {
        const id = req.params.id;
        const { name, description, price, stock } = req.body;
        if (!name || !description || !price || !stock) {
            res.status(400).json({ message: 'Faltan datos' });
            return;
        }
        const result = await ProductModel.updateProduct(id, name, description, price, stock);
        res.send(result);
    },


    deleteProduct: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await ProductModel.deleteProduct(id);    
            res.json({ message: 'Producto eliminado' });
        } catch (error) {
            console.log(error)
        }    
    },
}
export default ProductController;



/* app.get('/products', async (req, res) => {
    try {
        const result = await connection.query('SELECT * FROM products');
        const [content, metadata] = result;
        res.json(content);

    } catch (error) {
        console.log(error)
    }

});

app.get('/products/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const [result, metadata] = await connection.query('SELECT * FROM products WHERE id =?', [id]);
        if (!Array.isArray(result) || result.length === 0) {
            res.status(404).json({ message: 'No se encontró el producto' });
            return
        }
        res.json(result);
    } catch (error) {
        console.log(error)
    }

});



app.post('/product', (req, res) => {
    const { name, description, price, stock } = req.body;
    if (!name || !description || !price || !stock) {
        res.status(400).json({ message: 'Faltan datos' });
        return;
    }
    const query = `INSERT INTO products (product_name, product_description, price, stock)
    VALUES ('${name}', '${description}', '${price}', '${stock}')`;
    connection.query(query, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al insertar el producto' });
            return;
        } else {
            res.json({ message: 'Producto insertado' });
        }
    });
});
app.put('/product/:id', (req, res) => {
   const id = req.params.id;
   const { name, description, price, stock } = req.body;
   if (!name ||!description ||!price ||!stock) {
       res.status(400).json({ message: 'Faltan datos' });
       return;
   }
const query = `UPDATE products SET product_name = '${name}', product_description = '${description}', price =${price}, stock = '${stock}' WHERE id = ${id}`;
    connection.query(query, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al actualizar el producto' });
            return;
        } else {
            res.json({ message: 'Producto actualizado' });
        }
    });
});


app.delete('/product/:id', (req, res) => {
    try {
        const id = req.params.id;
        const query = `DELETE FROM products WHERE id = ${id}`;
        connection.query(query,(error, result) => {
            if (error) {
                console.log(error);
                res.status(500).json({ message: 'Error al eliminar el producto' });
                return;
            } else {
                res.json({ message: 'Producto eliminado' });
            }
        });
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        console.log(error)
    }

});


 */