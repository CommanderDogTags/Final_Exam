import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { json, setStorage } from '../utils/api';

const Register: React.FC<RegisterProps> = props => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            let response: any = await json('/auth/register', 'POST', { email, password, name });
            setStorage(response.token, { authorid: response.authorid, role: response.role});
            props.history.push('/all');
            alert('Registered!');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <h1 className="text-primary mt-5 text-center">Register!</h1>

            <div className='container d-flex justify-content-center'>
            <Link to={`/login`} className='btn btn-primary mx-2 mb-2'>Back!</Link>
            </div>

            <div>
                <form className='form-group border border-primary p-3'>

                    <label>Name:</label>
                    <input className='form-control' type="email" value={name} onChange={e => setName(e.target.value)} />

                    <label>Email:</label>
                    <input className='form-control' type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <label>Password:</label>
                    <input className='form-control' type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={handleSubmit} className='btn btn-primary mt-2'>Register!</button>

                </form>
            </div>

        </>
    );
};

interface RegisterProps extends RouteComponentProps<{id:string}> {}

export default Register;