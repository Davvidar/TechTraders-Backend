import { connection } from "../database/config";

const UserModel = {
    getAllUsers: async () => {
        const [result, metadara] = await connection.query('SELECT * FROM users');
        return result;
    },
    getUser: async (id: string) => {
        const [result, metadata] = await connection.query('SELECT * FROM users WHERE id =?', [id]);
        return result;
    },
    addUser: async (username: string, telephone: number, email: string, pass: string) => {
        const [result, metadata] = await connection.query(`INSERT INTO users (username, telephone, email, password) VALUES ('${username}', '${telephone}', '${email}', '${pass}')`);
        return result;
    },
    updateUsers: async (id: string, username: string, telephone: number, email: string, pass:string) =>{
        const [result, metadata] = await connection.query(`UPDATE users SET username = '${username}', telephone = '${telephone}', email = '${email}', password = '${pass}' WHERE id = ${id}`);
        return result;
    },
    deleteUsers: async (id: string) => {
        const [result, metadata] = await connection.query(`DELETE FROM users WHERE id = ${id}`);
        return result;
    },
    loginUser : async (username: string, pass: string, email:string) => {

        const [result, metadata] = await connection.query(`SELECT *
        FROM users
        WHERE email = '${email}' AND pass = '${pass}'`);
        return result;
    }

}
export default UserModel;