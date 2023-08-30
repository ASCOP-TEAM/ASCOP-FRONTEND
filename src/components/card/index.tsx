import React from "react";
import { Container } from "./styles";

interface CardsProps {
    icon: React.ElementType
    title: string
    content: string;
}

export const Card: React.FC<CardsProps> = ({ icon: Icon, title, content }) => {

    return (
        <Container >
            <div className='icon'>
                <Icon />
            </div>
            <div className='title'>
                <h3>{title}</h3>
            </div>
            <div className='text-wrapper'>
                <p>
                    {content}
                </p>
            </div>
        </Container>
    );
};




