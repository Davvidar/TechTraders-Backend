import { Sequelize, DataTypes } from 'sequelize';
import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

// Importar modelos
import User from '../models/UserModel';
import Product from '../models/ProductModel';
import Category from '../models/CategoryModel';

// Carga las variables de entorno
dotenv.config();

const CONFIG = {
    host: process.env.HOST,
    port: 3306,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
};

export const connection = createPool(CONFIG);

const sequelize = new Sequelize(CONFIG.database!, CONFIG.user!, CONFIG.password!, {
    host: CONFIG.host,
    dialect: process.env.DIALECT as any,
});

const db = {
    sequelize: sequelize,
    models: {
        User: User(sequelize, DataTypes),
        Product: Product(sequelize, DataTypes),
        category: Category(sequelize, DataTypes)
    }
};

export default db;
