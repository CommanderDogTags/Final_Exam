import * as React from 'react';

const One: React.FC<OneProps> = props => {
    return (
        <>
            <h1 className="text-primary mt-5 text-center">One!</h1>
        </>
    );
};

interface OneProps {}

export default One;