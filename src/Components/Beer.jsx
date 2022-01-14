const Beer = ({name, image, abv, foodPairing}) => {

    return (

        <div>

            <h3> {name} </h3>

            <img src={image} alt={`beer ${name}`}width="200px"/>

            <h4> Alcohol content: {abv} </h4>

            {/* Food pairing is an array of objects */}

            <ul>

                {foodPairing.map((food) => {

                    return <li> {food} </li>

                })}

            </ul>

           

        </div>

     );

}

 

export default Beer;