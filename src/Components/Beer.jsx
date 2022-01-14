const Beer = ({name, image, abv, desc}) => {

    return (

        <div>

            <h3> {name} </h3>

            <img src={image} alt={`beer ${name}`}height="200px"/>

            <h4> Alcohol content: {abv}% </h4>

            <p> {desc} </p>

           

        </div>

     );

}

 

export default Beer;