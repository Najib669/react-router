import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Rating from "./Search";

const MovieCard = ({movie}) => {
let id= movie.id
  return (
  <div>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.img} style={{width:287}}/>
      <Card.Body className='crdbdy'>
        <Card.Title>{movie.title}</Card.Title>
        <button> <Link to={"/Newpage/" + id }> Details</Link> </button>
        <Rating
          name="rate1" 
          starCount={5}
          value={movie.rating}
        /> 
        <Card.Text>
        {movie.desc}
        </Card.Text>

      </Card.Body>
    </Card>
       
  </div>
  );
};

export default MovieCard;