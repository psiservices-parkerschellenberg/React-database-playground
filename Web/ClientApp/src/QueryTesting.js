import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ReadWithUseQuery } from './Queries';
import { useState } from 'react';


const QueryTesting = () => {

    const [ dataFromUseQueryList, setDataFromUseQueryList ] = useState([]);

    const { data: dataFromUseQuery } = ReadWithUseQuery();

    const handleClick = (e) => {
        setDataFromUseQueryList(dataFromUseQuery);
        console.log("Response: ", dataFromUseQueryList);
    }

    return (
        <>
            <div className="container-xl">
                <div className="card bg-dark me-xl-0 my-md-0">
                    <div className="card-body">
                        <h2 className="mx-xl-0">Run Query With useQuery!</h2>
                        {
                        <ul>
                            {dataFromUseQueryList && dataFromUseQueryList.map((name) =>
                            <li key={name.id}>
                                {name.firstName}
                            </li>
                            )}
                        </ul> 
                        }
                    </div>
                    <div className="card-footer">
                        <button onClick={handleClick}>Run!</button>
                    </div>
                </div>

                <div className="card bg-dark mt-md-50">
                    <div className="card-body">
                        <h2 className="mx-lg-0">Run Query With QueryClient!</h2>
  
                    </div>
                    <div className="card-footer">
                        <button onClick={handleClick}>Run!</button>
                    </div>
                </div>
            </div>
        </>
    );
};


export default QueryTesting;