import axios from 'axios';
//useQuery is for getting data and useMutation is for changing data
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const QUERIES = {

    "Playground": {
        "Get": ["test1", "test2"],
        "Get2": ["test3", "test4"],
    }
}

//useQuery is set to getList and is returned. getList is now an object that contains other objects such as refetching, loading, errors, etc
export const useGetEndpoint = () => {
    //URL needs to be the same port number as browser port number?
    //Refetch function is returned, and fetchPolicy is used for the query's first execution
    const getList = useQuery({
        //Unique id for query
        queryKey: [...QUERIES.Playground.Get],
        queryFn: async () => await axios.get(`https://localhost:7232/api/Rows`),
    });

    return getList;
};