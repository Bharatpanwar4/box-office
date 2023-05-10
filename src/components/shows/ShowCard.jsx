import { Link } from "react-router-dom";

const ShowCard = ({name,image,id,summary})=>{
    return <div>
    <div>
    <img src={image} alt={name}/>

    </div>
        <h1>{name}</h1>
        <div>
            <Link to='/'>Read more</Link>
            <button type="button">Start me</button>
        </div>
    </div>
}

export default ShowCard;