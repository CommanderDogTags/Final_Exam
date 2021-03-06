import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { json, Author } from '../utils/api';
import { Link } from 'react-router-dom';
import { IBook } from '../utils/interface';

const Edit: React.FC<EditProps> = props => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [categoryid, setCategoryid] = useState<string>('1');
    const [category, setCategory] = useState<{ id: number, name: string }[]>([
        {
            id: 0,
            name: ''
        }
    ]);
    const [book, setBook] = useState<IBook>({
       id: 0, category: '', title: '', author: '', price: '' 
    });

    useEffect(() => {
        (async () => {
            try {
                let category = await json('/api/categories');
                setCategory(category);
                setBook(props.location.state.book);
                setTitle(props.location.state.book.title);
                setAuthor(props.location.state.book.author);
                setPrice(props.location.state.book.price);
                if (!Author || Author.authorid === null || Author.role !== 'admin') {
                    alert('You must be logged in to access this page!');
                    props.history.replace('/login');
                }
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            let response: any = await json(`/api/books/${props.match.params.id}`, 'PUT', { title, author, categoryid, price})
            console.log(response);
            props.history.push('/all');
        } catch (e) {
            console.log(e);
        }
    };

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            let response: any = await json(`/api/books/${props.match.params.id}`, 'DELETE')
            console.log(response);
            props.history.push('/all');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <h1 className="text-primary mt-5 text-center">Edit!</h1>

            <div className='container d-flex justify-content-center'>
            <Link to={`/all`} className='btn btn-primary mx-2 mb-2'>Back!</Link>
            </div>

            <div>
                <form className='form-group border border-primary p-3'>

                    <label>Title:</label>
                    <input className='form-control' type="text" value={title} onChange={e => setTitle(e.target.value)} />

                    <label>Author:</label>
                    <input className='form-control' type="text" value={author} onChange={e => setAuthor(e.target.value)} />

                    <label>Price:</label>
                    <input className='form-control' type="number" value={price} onChange={e => setPrice(e.target.value)} />

                    <label>Category:</label>
                    <select value={categoryid} onChange={e => setCategoryid(e.target.value)} className='form-control'>
                        {category.map((category) => (
                            <option key={`category-${category.id}`} value={category.id}>{category.name}</option>
                        ))}
                    </select>

                    <button type="submit" onClick={handleEdit} className='btn btn-primary mt-2'>Edit!</button>

                    <button type="submit" onClick={handleDelete} className='btn btn-primary mt-2 mx-2'>Delete!</button>

                </form>
            </div>
        </>
    );
};

interface EditProps extends RouteComponentProps<{id:string}> {}

export default Edit;