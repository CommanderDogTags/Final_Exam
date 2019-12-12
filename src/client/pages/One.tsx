import * as React from 'react';
import { useState, useEffect } from 'react';
import { IBook } from '../utils/interface';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

const One: React.FC<OneProps> = props => {
    const [book, setBook] = useState<IBook>({
        id: 0, category: '', title: '', author: '', price: ''
    });

    useEffect(() => {
        (async () => {
            try {
                setBook(props.location.state.book);
            } catch (e) {
             console.log(e);   
            }
        })();
    }, []);

    return (
        <>
            <h1 className="text-primary mt-5 text-center">One!</h1>

            <article className='card border border-primary mt-5' key={`book-${book.id}`}>
                <div className='card-header text-center'>
                    <h4>{book.title}</h4>
                </div>

                <div className='card-body text-center'>
                    <p>Author: {book.author}</p>
                    <p>Category: {book.category}</p>
                    <p>Price: {book.price}</p>
                    <Link to={{pathname: `/edit/${book.id}`, state: {book}}} className='btn btn-primary mx-2'>Edit!</Link>
                    <Link to={`/all`} className='btn btn-primary mx-2'>Back!</Link>
                </div>
            </article>
        </>
    );
};

interface OneProps extends RouteComponentProps<{id:string}> {}

export default One;