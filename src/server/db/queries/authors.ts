import { Query } from '../index';

const findOneByEmail = async (email:string) => Query<{ password: string }[]>(`SELECT * FROM authors WHERE email=?`, [email]);

const findOneById = async (id:string) => Query<{}[]>(`SELECT * FROM authors WHERE id=?`, [id]);

const insert = async (author:any) => Query(`INSERT INTO authors SET ?`, [author]);

export default {
    findOneByEmail,
    findOneById,
    insert
}