import React, { useState } from 'react';
import Add from './AddMovie';
import MovieCard from './MovieCard'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const MoviesList = ({movies,addMovie}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        ADD NEW MOVIE
      </Button>
      <Add show={show} handleClose={handleClose} 
      addMovie={addMovie}></Add>
      <div className='cards'> {movies.map(el=><MovieCard movie={el}/>)}</div> 
    </div>
  )
}

export default MoviesList