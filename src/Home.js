import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";



const Home = () => {
    let history = useHistory();

    const [item, setItem] = useState([]);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        fetch('https://thronesapi.com/api/v2/Characters').then(response => response.json()).then(json => { setItem(json) })
    }, []);

 const handleChange = (e) =>{ 
     let value =  e.target.value;
    let result = [];
    console.log("value = ", value)
    result = item.filter((d) => {
      return d.firstName.search(value) != -1;
      });
      setItem(result);}

    return (

        <div>
            <input type="text" placeholder="Type for Search data" onChange={handleChange}></input>

            <p>Data Details:- </p>
            <list>
                {

                    item?.map((item) => {
                        return <div> <p> <b>First Name: </b> {item.firstName}</p>
                            <p> <b> Last Name: </b> {item.lastName}</p>
                            <p><b>Family Name: </b> {item.family}</p>
                            <Link to={`/data?id=${item.id}`}>Show Data</Link></div>
                    })
                }
            </list>

        </div>
    )
}

export default Home
