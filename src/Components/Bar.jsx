import { useState } from "react";
import Beer from "./Beer";
import axios from "axios";
import Button from 'react-bootstrap/Button';

const Bar = () => {

    const [loaded, setLoaded] = useState(false);
    const [beerData, setBeerData] = useState([]);
    const [error, setError] = useState(null);
    const [tempId, setTempId] = useState(null);

    const getData = () => {
        console.log("button clicked");
        axios.get("http://localhost:5015/beer/getAll")
        .then((res) => {
            console.log(res);
            setBeerData(res.data);
            
            setLoaded(true);
        })
        .catch((err) => {
            setError(error);
            console.error(err);
        });
    };

    const getById = (id) => {

        axios.get(`http://localhost:5015/beer/get/${id}`)
        .then((response) => {
            setBeerData(response.data);
            setLoaded(true);
        }).catch((error) => {
            setLoaded(true);
            setError(error);
        });
    }



    return ( 
        <div>
            <h5>Bar</h5>
            <button type="button" onClick={()=>{getData()}}>Get Beers</button>
            <div>
                <input type="text" name="beerId" onChange={(event) => setTempId(event.target.value)}/>
                <Button onClick={() => {getById(tempId)}}>
                    Get Beer by ID
                </Button>
               
                {beerData.map((beer) => {
                    return <Beer name={beer.name} image={beer.image_url} abv={beer.abv} desc={beer.description}/>
                })}
            </div>
        </div>
     );
};
 
export default Bar;