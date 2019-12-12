import * as React from 'react';
import { useState, useEffect } from 'react';
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IBook } from '../utils/interface';

const All: React.FC<AllProps> = props => {
    const [books, setBooks] = useState<IBook[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let books = await json('api/books');
                setBooks(books);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return (
        <>
            <h1 className='text-primary mt-5 text-center'>All!</h1>

            <div className='container d-flex justify-content-center'>
                <Link to={`/compose`} className='btn btn-primary mx-2'>Add a Book!</Link>
                <Link to={`/`} className='btn btn-primary mx-2'>Home!</Link>
            </div>

            {books.map(book => (
                <article className='card border border-primary mt-5' key={`book-${book.id}`}>
                    <div className='card-header text-center'>
                        <h4>{book.title}</h4>
                    </div>
                    <div className='card-body text-center'>
                        <Link to={{pathname: `/one/${book.id}`, state: {book}}} className='btn btn-primary'>Book Info!</Link>
                    </div>
                </article>
            ))}
        </>
    );
};

interface AllProps extends RouteComponentProps {}

export default All;