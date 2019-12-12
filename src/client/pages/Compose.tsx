import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { json } from '../utils/api';
import { Link } from 'react-router-dom';

const Compose: React.FC<ComposeProps> = props => {
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

    useEffect(() => {
        (async () => {
            try {
                let category = await json('/api/categories');
                setCategory(category);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            let response: any = await json('/api/books', 'POST', { title, author, categoryid, price})
            console.log(response.insertId);
            props.history.push('/all');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <h1 className="text-primary mt-5 text-center">Compose!</h1>

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

                    <button type="submit" onClick={handleSubmit} className='btn btn-primary mt-2'>Submit!</button>

                </form>
            </div>
        </>
    );
};

interface ComposeProps extends RouteComponentProps { }

export default Compose;