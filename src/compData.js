import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const CompData = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://thronesapi.com/api/v2/Characters').then(response => response.json()).then(json => { setData(json) })
    }, []);
    return (
        <div>
           

            <h1>{data.id}</h1>

            <h1>Complete Data</h1>
            <div>
                <input type="text" placeholder="..."></input>
                <input type="text" placeholder="..."></input>
                <button>Edit</button>
                <button>Delete</button>
            </div>

        </div>
    )
}
export default CompData;