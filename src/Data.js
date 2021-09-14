import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Data = () => {
    let query = useQuery();
    const [item, setItem] = useState([]);

    console.log({ item })
    useEffect(() => {
        fetch('https://thronesapi.com/api/v2/Characters/' + query.get('id')).then(response => response.json()).then(json => setItem(json))
    }, [query]);
    // console.log({item})
    
    
    return (
        <div>

           
            <h1>Details</h1>

            <p> <b>ID: </b> {query.get('id')} </p>
            <p> <b> First Name: </b> {item.firstName}</p>
            <p><b>last Name:</b> {item.lastName}</p>
            <p><b>Title :</b> {item.title}</p>
            <p> <b>Family: </b>{item.family}</p>
            <p> <b>Image Name:</b> {item.image}</p>
            <img style={{ height: '200px', width: '200px' }} src={item.imageUrl} alt="Logo" />;
        </div>
    )
}

export default Data
