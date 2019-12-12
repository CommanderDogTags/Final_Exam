import * as mysql from 'mysql';
import config from '../config';

export const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
	return new Promise<T>((resolve, reject) => {
		pool.query(query, values, (err, results) => {
			if (err) reject(err);
			resolve(results);
		});
	});
};

import books from './queries/books';
import tokens from './queries/tokens';
import authors from './queries/authors';
import categories from './queries/categories';

export default {
	books,
	tokens,
	authors,
	categories
}