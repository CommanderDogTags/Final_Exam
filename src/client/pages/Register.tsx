import * as React from 'react';
import { Link } from 'react-router-dom';


const Register: React.FC<RegisterProps> = props => {
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

interface RegisterProps {}

export default Register;