import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


export const ReadWithUseQuery = () => {
    const { data } = useQuery({
        queryKey: ['WithUseQuery'],
        queryFn: () => axios.get('/api/Rows')
    });

    return ({ ...data });
}

export const ReadWithUseQueryClient = () => {

    return ("Hey there!");
}