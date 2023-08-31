import React, { useState } from 'react'
import { useGetEndpoint, useGetCallback } from '../queries/playground';

const HomePage = () => {
    //useQueryObject is now an object and needs to be destructed
    const { data } = useGetEndpoint();

    const getData = useGetCallback();

    const [list, setList] = useState([]);
    const [secondList, setSecondList] = useState([]);
    const [isToggled, setIsToggled] = useState(false);
    const [secondIsToggled, setSecondIsToggled] = useState(false);

    //{
    //   "id": 1,
    //   "firstName": "John",
    //   "middleName": "James",
    //   "lastName": "Man",
    //   "examDate": "1992-09-12T00:00:00",
    //   "price": 8.99
    //}

    const handleClick = () => {

        //setIsToggled(poop => !poop);
        setIsToggled(!isToggled);

        isToggled ? setList([]) : setList(data)
    }

    const handleSecondButton = async () => {
        const { data } = await getData();

        setSecondIsToggled(!secondIsToggled);

        secondIsToggled ? setSecondList([]) : setSecondList(data)
    }

    return (
        <div>
            <h3>Get data using useQuery</h3>
            <button onClick={handleClick}>
                {isToggled ? 'Hide data first name' : 'Show data first name'}
            </button>
            <ul>
                {list && list.map(item => (
                    <li key={item.id}>
                        {item.firstName}
                    </li>
                ))}
            </ul>
                
            <h3>Get data involving useQueryClient</h3>
            <button onClick={handleSecondButton}>
                {secondIsToggled ? 'Hide data first name' : 'Show data first name'}
            </button>
            <ul>
                {secondList && secondList.map(item => (
                    <li key={item.id}>
                        {item.firstName}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default HomePage;