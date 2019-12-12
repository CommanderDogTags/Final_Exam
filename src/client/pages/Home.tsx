import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom'

const Home: React.FC<HomeProps> = props => {

    return (
        <>
            <h1 className="text-primary mt-5 text-center">Welcome to Chris's Awful Bookstore!</h1>

            <div className='container d-flex justify-content-center'>
                <Link to={`/all`} className='btn btn-primary mx-2'>View Books!</Link>
                <Link to={`/login`} className='btn btn-primary mx-2'>Login or Register!</Link>
            </div>
        </>
    );
};

interface HomeProps extends RouteComponentProps {}

export default Home;