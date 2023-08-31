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
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Exam Date</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {data.data.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.firstName}</td>
                        <td>{row.middleName || '-'}</td>
                        <td>{row.lastName}</td>
                        <td>{row.examDate}</td>
                        <td>{row.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
