import { Query } from '../index';

const getAll = async () => Query<[]>(`SELECT b.id, c.name AS category, b.title, b.author, b.price, b._created FROM books b JOIN categories c ON c.id = b.categoryid ORDER BY _created DESC`);

const getOne = async (id: string) => Query<{}[]>(`SELECT b.id, c.name AS category, b.title, b.author, b.price, b._created FROM books b JOIN categories c ON c.id = b.categoryid WHERE b.id =?;`, [id]);

const deleteBook = async (id: string) => Query<{}>(`DELETE FROM books WHERE id =?`, [id]);

const postBook = async (title: string, author: string, price: number, categoryid: number) => Query<{insertId:number}>(`INSERT INTO books (title, author, price, categoryid) VALUES (?)`, [[title, author, price, categoryid]]);

const editBook = async (title: string, author: string, price: number, categoryid: number, id: string) => Query<{}>(`UPDATE books SET title=?, author=?, price=?, categoryid=? WHERE id=?`, [title, author, price, categoryid, id]);


export default {
    getAll,
    getOne,
    deleteBook,
    postBook,
    editBook
}