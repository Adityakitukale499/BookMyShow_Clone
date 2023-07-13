import React, { useContext } from 'react'
import { DataMovie } from '../context/NoteContex'
import Card from './Card';
import Slider from './Slider';
import './Card.css'
const Body = () => {
    const dataContext = useContext(DataMovie)
    console.log(dataContext.movieData);
    return (
        <div className='body_container'>
            <Slider/>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {dataContext.movieData.map((e, i) => (
                    <Card key={i} movie={e} />
                ))}
            </div>
        </div >
    )
}

export default Body