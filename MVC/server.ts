import express, { query } from 'express';
import { connection } from './database/config';
import ProductRouter from './routes/ProductRouter'
import CategoryRouter from './routes/CategoryRouter'
import UserRouter from './routes/UserRouter'

const app = express();
const port = 3000;
app.use(express.json())


app.use("/products", ProductRouter);
app.use("/users", UserRouter);
app.use("/category", CategoryRouter);



app.listen(port, () => {
    console.log(`Server started on http://localhost:${port} !`);
});




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

