import React from 'react';
import { Container } from './styles';
import { Download } from 'lucide-react';

interface CardsProps {
    title: string;
    description: string;
    url_file: string;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
}

export const CardReport: React.FC<CardsProps> = ({ title, description, url_file }) => {
    return (
        <Container>
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="text-wrapper">
                <p>{description}</p>
            </div>
            <div className='dowload'>
                <a href={url_file}>Dowload</a>
                <Download />
            </div>
        </Container>
    );
};
