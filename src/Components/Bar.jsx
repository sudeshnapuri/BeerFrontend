import { useState } from "react";
import Beer from "./Beer";
import axios from "axios";
import Button from 'react-bootstrap/Button';

const Bar = () => {

    const [loaded, setLoaded] = useState(false);
    const [beerData, setBeerData] = useState([]);
    const [error, setError] = useState(null);
    const [tempId, setTempId] = useState(null);
    const [tempName, setTempName] = useState(null);
    const [tempDesc, setTempDesc] = useState(null);
    const [tempAbv, setTempAbv] = useState(null);

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
            setBeerData([response.data]);
            setLoaded(true);
        }).catch((error) => {
            setLoaded(true);
            setError(error);
        });
    };

    const deleteBeer = (id) => {
        axios.delete(`http://localhost:5015/beer/delete/${id}`)
        .then((res) => {
            getData();
            alert(res.data);
        }).catch((error) => {
            setError(error);
        });
    }

    // const createBeer = (beerName, beerDesc, beerAbv) => {
    //     axios.post(`http://localhost:5015/beer/post`, {
    //             name: beerName,
    //             description : beerDesc,
    //             abv: beerAbv
    //         }).then((response) => {
    //             console.log(response);
    //         }); 
    // }



    return ( 
        <div>
            <h5>Bar</h5>
            <button type="button" onClick={()=>{getData()}}>Get Beers</button>
            <div>
                <input type="text" name="beerId" onChange={(event) => setTempId(event.target.value)}/>
                <Button onClick={() => {getById(tempId)}}>
                    Get Beer by ID
                </Button>
                <Button onClick={() => {deleteBeer(tempId)}}>
                   Delete Beer by ID
                </Button>

                {/* <form>
                    <input type="text" placeholder="name" onChange={(e) => {setTempName(e.target.value)}}/>
                    <input type="text" placeholder="description" onChange={(e) => {setTempDesc(e.target.value)}}/>
                    <input type="text" placeholder="ABV" onChange={(e) => {setTempAbv(e.target.value)}}/>
                    <Button onClick={() => {createBeer(tempName, tempDesc, tempAbv)}}>
                   Add Beer
                    </Button>
                </form> */}
               
                {beerData.map((beer) => {
                    return <Beer name={beer.name} image={beer.image_url} abv={beer.abv} desc={beer.description}/>
                })}
            </div>
        </div>
     );
};
 
export default Bar;