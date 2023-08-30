import React, { useState } from 'react'
import { useGetEndpoint } from '../queries/playground';

const HomePage = () => {
    //useQueryObject is now an object and needs to be destructed
    const useQueryObject = useGetEndpoint();
    //Destructing the useQueryObject
    const { data: { data }, refetch } = useQueryObject;

    const [list, setList] = useState([]);
    const [isToggled, setIsToggled] = useState(false);

    //{
    //   "id": 1,
    //   "firstName": "John",
    //   "middleName": "James",
    //   "lastName": "Man",
    //   "examDate": "1992-09-12T00:00:00",
    //   "price": 8.99
    //}

    const handleClick = () => {

        setIsToggled(prevState => !prevState);
        isToggled ? setList([]) : setList(data)
    }

    return (
        <div>
            <h3>Get data using useQuery</h3>
            <button onClick={handleClick}>
                {isToggled ? 'Hide data first name' : 'Show data first name'}
            </button>
            <ul>
                {list.map(item => (
                    <li key={item.id}>
                        {item.firstName}
                    </li>
                ))}
            </ul>
                
            <h3>Get data using useQueryClient</h3>
        </div>
    );
}

export default HomePage;