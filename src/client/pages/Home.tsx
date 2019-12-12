import * as React from 'react';

const Home: React.FC<HomeProps> = props => {
    return (
        <>
            <h1 className="text-primary mt-5 text-center">Welcome to Chris's Awful Bookstore!</h1>
        </>
    );
};

interface HomeProps {}

export default Home;