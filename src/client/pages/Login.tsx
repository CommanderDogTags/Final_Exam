import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { json, setStorage } from '../utils/api';

const Login: React.FC<LoginProps> = props => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            let response: any = await json('/auth/login', 'POST', { email, password});
            setStorage(response.token, { authorid: response.authorid, role: response.role});
            props.history.push('/all');
            alert('Logged in!');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <h1 className="text-primary mt-5 text-center">Login!</h1>

            <div className='container d-flex justify-content-center'>
            <Link to={`/`} className='btn btn-primary mx-2 mb-2'>Back!</Link>
            </div>

            <div>
                <form className='form-group border border-primary p-3'>

                    <label>Email:</label>
                    <input className='form-control' type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <label>Password:</label>
                    <input className='form-control' type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={handleSubmit} className='btn btn-primary mt-2'>Login!</button>

                    <Link to={`/register`} className='btn btn-primary mx-2 mt-2'>Not Registered? Click Here!</Link>

                </form>
            </div>
        </>
    );
};

interface LoginProps extends RouteComponentProps {}

export default Login;