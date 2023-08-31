import axios from 'axios';
//useQuery is for getting data and useMutation is for changing data
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

export const QUERIES = {

    "Playground": {
        "Get": ["test1", "test2"],
        "Get2": ["test3", "test4"],
    }
}

//ONE WAY TO GET DATA
//get data object out of useQuery and is returned destructured
export const useGetEndpoint = () => {
    const { data } = useQuery({
        //Unique id for query
        queryKey: [...QUERIES.Playground.Get],
        queryFn: async () => await axios.get(`api/Rows`),
        staleTime: 10000
    });
    
    //Uses the spread operator to extract everything inside the data object, including array called "data" (confusing)
    return { ...data };
};

const getDataQuery = () => {
    return {
        queryKey: [...QUERIES.Playground.Get2],
        queryFn: async () => await axios.get(`api/Rows`),
    }
}

//This case uses a useCallback, so I have more control over the data fetching process
//when you need to fetch data conditionally, trigger fetches based on user interactions
export const useGetCallback = () => {

    const queryClient = useQueryClient();

    const getDataCallback = useCallback(async () => {
        var query = getDataQuery();
        //fetchQuery = calls and caches the query
        //Gets data and caches it if getQueryData is null / undefined, if its not null / undefined, get data 
        //Difference? idk
        var response = queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));

        return {...response};
    }, [queryClient])

    return getDataCallback

}
