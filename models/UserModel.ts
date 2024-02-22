import { connection } from "../database/config";

const UserModel = {
    getAllUsers: async () => {
        const [result, metadata] = await connection.query('SELECT * FROM users');
        return result;
    },
    getUser: async (id: string) => {
        const [result, metadata] = await connection.query('SELECT * FROM users WHERE id =?', [id]);
        return result;
    },
    addUser: async (username: string, email: string, pass: string) => {
        const [result, metadata] = await connection.query(`INSERT INTO users (username, email, pass) VALUES ('${username}', '${email}', '${pass}')`);
        return result;
    },
    updateUser: async (id: string, username: string, email: string, pass:string) =>{
        const [result, metadata] = await connection.query(`UPDATE users SET username = '${username}', email = '${email}', pass = '${pass}' WHERE id = ${id}`);
        return result;
    },
    deleteUser: async (id: string) => {
        const [result, metadata] = await connection.query(`DELETE FROM users WHERE id = ${id}`);
        return result;
    },
    loginUser : async (username: string, pass: string, email:string) => {
        const [result, metadata] = await connection.query(`SELECT * FROM users WHERE email = '${email}' AND pass = '${pass}'`);
        return result;
    }
}
export default UserModel;