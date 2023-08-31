import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const Table = () => {

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['getRows'],
        queryFn: async () => axios.get(`/api/Rows`)
    });

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <ul>
            {data.data.map((todo) => (
                <li key={todo.id}>{todo.firstName}</li>
            ))}
        </ul>
    );
};

export default Table;
