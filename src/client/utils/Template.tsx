import * as React from 'react';

const Template: React.FC<TemplateProps> = props => {
    return (
        <>
            <h1 className="text-primary mt-5 text-center">Template!</h1>
        </>
    );
};

interface TemplateProps {}

export default Template;