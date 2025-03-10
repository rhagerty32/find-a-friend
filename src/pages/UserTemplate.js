import React from 'react';
import { useParams } from 'react-router-dom';
import { people } from '../components/userData';

export const UserTemplate = () => {
    const params = useParams();
    const name = params.user;

    return (
        <div className="text-center p-5">
            <h1 className="text-2xl font-bold">{name}</h1>
            <img src={people.find(person => person.name === name).imgSrc} alt={name} className="w-48 h-48 mx-auto mt-4" />
        </div>
    );
};